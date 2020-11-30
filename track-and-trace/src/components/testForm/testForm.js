import React, { Component } from 'react';
import { Formik, Form, useField } from 'formik';
import { TextField, Radio, FormControlLabel, Button } from '@material-ui/core';
import * as yup from 'yup';
import './styles.css';


const MyRadio = ({label, ...props}) => {
    const [field] = useField(props);
    return (
    <FormControlLabel {...field} control={<Radio />} label={label} /> 
    )
}

const MyTextField = ({
    placeholder,
    ...props
}) => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : '';
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
    genloc: yup
    .string()
    .required()
    .max(4),
    btconsent: yup
    .string()
    .required(),
    tcconsent: yup
    .string()
    .required()
})

class testForm extends Component {

    render() {
        return (
            <div>
                <Formik 
                initialValues={{
                    genloc: '', 
                    btconsent: '',
                    tcconsent: ''
                }}
                validationSchema={validationSchema}

                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true);
                    //make async call
                    console.log('submit: ', data);
                    setSubmitting(false);
                }}
                >
                    {({ values, errors, isSubmitting }) => (
                        <Form>
                            <div> q1</div>
                            <MyTextField
                            placeholder='Input text' 
                            name='genloc'
                            type='input'
                            as={TextField}
                            />

                            <div> q2</div>
                            <MyRadio name='btconsent' type='radio' value="yes" label='yes' />
                            <MyRadio name='btconsent' type='radio' value="no" label='no'  />

                            <div> q3</div>
                            <MyRadio name='tcconsent' type='radio' value="yes" label='yes' />
                            <MyRadio name='tcconsent' type='radio' value="no" label='no' />


                            <div>
                                <Button disabled={isSubmitting} type='submit'>Continue</Button>
                            </div>
                            <pre>{JSON.stringify(values, null, 2)}</pre>
                            <pre>{JSON.stringify(errors, null, 2)}</pre>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}

export default testForm;