import React from "react";
import Redirect from "../index.js";

import { Formik, Form, useField } from "formik";
import { TextField, Radio, FormControlLabel, Button } from "@material-ui/core";

import * as yup from "yup";

import Dashboard from "../pages/dashboard";

import info from "../images/information.png";
import ArrowIcon from "../images/arrow.png";
import SuccessTick from "../images/tick.png";

const MyRadio = ({ label, ...props }) => {
  const [field] = useField(props);
  return <FormControlLabel {...field} control={<Radio />} label={label} />;
};

const MyTextField = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

const validationSchema = yup.object({
  genloc: yup.string().required().min(3).max(4),
  btconsent: yup.string().required(),
  tcconsent: yup.string().required().matches("Yes"),
});

const SignUserUp = (values) => {
  console.log(values);
  let setRegStatus = localStorage.setItem("tandt-regStatus", "true");
  let setPostcode = localStorage.setItem("tandt-postcode", values.postcode);
  let setBTStatus = localStorage.setItem("tandt-BTStatus", values.btconsent);
  return setRegStatus && setPostcode && setBTStatus;
};

class testForm extends React.Component {
  constructor() {
    super();
    this.state = {
      hasFinishedSetup: "true",
    };
  }

  changeFinishedStatus = (answer) => {
    this.setState({ hasFinishedSetup: answer });
  };

  render() {
    if (this.state.hasFinishedSetup === "false") {
      return (
        <div>
          <div className="form-header">
            <div className="form-text">
              To continue, please fill in the form below
            </div>
          </div>
          <Formik
            initialValues={{
              postcode: "",
              btconsent: "",
              tcconsent: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(data, { setSubmitting }) => {
              setSubmitting(true);
              //make async call
              console.log("submit: ", data);
              setSubmitting(false);
            }}
          >
            {({ values, errors, isSubmitting }) => (
              <Form id="welcome-form">
                <div className="form-row">
                  <div className="question">
                    <label>
                      The first three/four characters of your postcode:
                    </label>
                    <p className="tut-text">e.g LE7 or SG12</p>
                  </div>
                  <div className="form-input">
                    <MyTextField
                      className="form-text-input"
                      placeholder="postcode characters"
                      name="postcode"
                      type="input"
                      as={TextField}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="question">
                    <p>
                      Do you consent to Bluetooth services being used for
                      proximity matching?
                      <img
                        className="info-img"
                        src={info}
                        alt="more info"
                      ></img>
                    </p>
                    <p className="tut-text">Please tick the appropriate box</p>
                  </div>

                  <div className="form-radio-box">
                    <MyRadio
                      name="btconsent"
                      type="radio"
                      value="Yes"
                      label="Yes"
                    />
                    <MyRadio
                      name="btconsent"
                      type="radio"
                      value="No"
                      label="No"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="question">
                    <label className="tc-label">
                      I have read and agree with the
                    </label>
                    <p className="tut-text" id="t-and-t">
                      terms and conditions
                    </p>
                  </div>
                  <div className="form-radio-box">
                    <MyRadio
                      name="tc-consent"
                      type="radio"
                      value="Yes"
                      label="Yes"
                    />
                    <MyRadio
                      name="tc-consent"
                      type="radio"
                      value="No"
                      label="No"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <p id="about-the-app">About the App</p>
                </div>

                <div className="submit-button-positioner-welcome">
                  <div className="submit-button-holder-welcome">
                    <div className="arrow-icon-holder">
                      <img
                        src={ArrowIcon}
                        alt="arrow-icon"
                        className="arrow-icon-for-button"
                      ></img>
                    </div>
                    <Button
                      disabled={isSubmitting}
                      className="submit-button"
                      type="submit"
                      onClick={() =>
                        SignUserUp(values) && this.changeFinishedStatus("true")
                      }
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      );
    } else {
      return (
        <div className="success-page-holder">
          <div id="success-page">
            <div className="page-header" id="cis-header">
              <p>Success</p>
              <img
                src={SuccessTick}
                alt="success-tick"
                className="success-tick-icon"
              ></img>
            </div>
            <div className="content-inner-addit-page" id="success-page-info">
              <div id="venue-info">
                <p id="venue-name">All set up!</p>
                <p>Adhere to current Covid-19 rules & regulations</p>
                <p id="vci-learn-more">Learn more about current rules </p>
              </div>
            </div>

            <div className="submit-button-positioner-welcome-success">
              <div className="submit-button-holder-welcome">
                <div className="arrow-icon-holder">
                  <img
                    src={ArrowIcon}
                    alt="arrow-icon"
                    className="arrow-icon-for-button"
                  ></img>
                </div>
                <Button
                  className="submit-button"
                  type="submit"
                  onClick={() => {
                    Redirect(<Dashboard />);
                  }}
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default testForm;
