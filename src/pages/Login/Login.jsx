import React, { Component } from 'react';
import '../../App.css';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Formik, Form, FastField } from 'formik';
import InputField from './InputField.jsx';
import * as Yup from 'yup';




class Login extends Component{
    render(){
        const initialValues ={
        
        };
        const validationSchema = Yup.object().shape({
            Email: Yup.string().email().required('This field is required'),
            password: Yup.string().required('This field is required')
        })
        return(
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={values => console.log('Submit:', values)}
            >
                {formikProps =>{
                    const {values, errors, touched} = formikProps;
                    console.log({ values, errors, touched});
                    return(
                        <div className="signUp">
                            <div className="headerSignUp">
                                <h2 style={{paddingTop: '70px'}}> Welcome to register</h2>
                                <p>Already have account?</p>
                                <Link to="/login">Login now</Link>
                            </div>
                            <div className="contentSignUp">
                                <Form>
                                    <FastField
                                        name = 'Email'
                                        type = 'text'
                                        component = {InputField}

                                        label = 'Email'
                                        placeholder = 'Nhập Email' 
                                    />
                                    <FastField
                                        name = 'password'
                                        type = 'password'
                                        component = {InputField}

                                        label = 'Passworrd'
                                        placeholder = 'Nhập Password' 
                                    />
                                    <Button type='submit'>Submit</Button>
                                </Form>
                            </div>
                        </div>
                        );
                }}
            </Formik>
        )
    }
}
export default Login;