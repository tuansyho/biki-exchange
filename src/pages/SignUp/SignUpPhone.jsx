import React, { Component } from 'react';
import '../../App.css';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Formik, Form, FastField } from 'formik';
import InputField from './InputField.js';
import * as Yup from 'yup';
import firebase from '../../Firebase.jsx';


class SignUpPhone extends Component{
    constructor(props){
        super(props)


        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onSubmit(event){
        let phone, password;
        phone = event.Phone;
        password = event.Password;
        firebase
            .firestore()
            .collection('Phone')
            .add({
                phone,
                password
            })
    }
    render(){
        const initialValues ={
        
        };
        const validationSchema = Yup.object().shape({
            Phone: Yup.number()
                .typeError("That doesn't look like a phone number")
                .integer('A phone is number')
                .min(1000000000, 'A phone number min 9 numbers')
                .max(99999999999, 'A phone number max 10 numbers')
                .required('A phone number is required'),
            Password: Yup.string()
                .min(8)
                .max(14)
                .required('Password is required'),
            PasswordConfirm: Yup.string()
                .oneOf([Yup.ref('Password'), null], 'Passwords must match')
        })
        return(
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={this.onSubmit}
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
                                <div className="chooseSignUp">
                                    <Link to="signUp">
                                        <button >Email address</button>
                                    </Link>
                                    <button className="bold" >Phone number</button>
                                </div>
                                <div>
                                    <Form>
                                        <FastField
                                            name = 'Phone'
                                            type = 'text'
                                            component = {InputField}

                                            label = 'Phone'
                                            placeholder = 'Nhập Phone' 
                                        />
                                        <FastField
                                            name = 'Password'
                                            type = 'password'
                                            component = {InputField}

                                            label = 'Password'
                                            placeholder = 'Nhập Password' 
                                        />
                                        <FastField
                                            name = 'PasswordConfirm'
                                            type = 'password'
                                            component = {InputField}

                                            label = 'confirmPassword'
                                            placeholder = 'Confirm Password' 
                                        />
                                        <Button type="submit">Submit</Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Formik>   
        )
    }
}
export default SignUpPhone;