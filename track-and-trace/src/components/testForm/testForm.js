import React, { Component } from "react";
import { Formik, Form, useField } from "formik";
import { TextField, Radio, FormControlLabel, Button } from "@material-ui/core";
import * as yup from "yup";

import info from "../../images/information.png";

import "./styles.css";

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
  genloc: yup.string().required().max(4),
  btconsent: yup.string().required(),
  tcconsent: yup.string().required(),
});

class testForm extends Component {
  render() {
    return (
      <div>
        <div className="form-header">
          <div className="form-text">
            To Continue, please fill in the form below
          </div>
        </div>
        <Formik
          initialValues={{
            genloc: "",
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
            <Form>
              <div>
                <label className="question">
                  First 3/4 characters of your postcode:
                </label>
                <MyTextField
                  placeholder="Input text"
                  name="genloc"
                  type="input"
                  as={TextField}
                />
                <p className="tut-text">e.g LE7 or SG12</p>
              </div>

              <div className="row-container">
                <div className="question container">
                  <p className="question">
                    Do you consent to Bluetooth services being used for
                    proximity matching?
                  </p>
                  <img className="info-img" src={info} alt="more info"></img>
                  <p className="tut-text">please tick the appropriate box</p>
                </div>

                <div className="input-container">
                  <MyRadio
                    name="btconsent"
                    type="radio"
                    value="yes"
                    label="yes"
                  />
                  <MyRadio
                    name="btconsent"
                    type="radio"
                    value="no"
                    label="no"
                  />
                </div>
              </div>

              <div>
                <label className="tc-label">
                  I have read and aggree with the
                </label>
                <MyRadio
                  name="tc-consent"
                  type="radio"
                  value="yes"
                  label="yes"
                />
                <MyRadio name="tc-consent" type="radio" value="no" label="no" />
                <p className="tc-link">terms and conditions</p>
              </div>

              <div>
                <Button disabled={isSubmitting} type="submit">
                  Continue
                </Button>
              </div>

              <pre>{JSON.stringify(values, null, 2)}</pre>
              <pre>{JSON.stringify(errors, null, 2)}</pre>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default testForm;
