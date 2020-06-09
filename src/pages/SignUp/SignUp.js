import React, { Component } from 'react';
import '../../App.css';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Formik, Form, FastField } from 'formik';
import InputField from './InputField.js';
import * as Yup from 'yup';


class SignUp extends Component{
    constructor(props){
        super(props)
        this.state = {
            'emailAddress': true,
            'phoneNumber': false,
            'showEmailAddress': true,
            'showPhoneNumber': false,
            'valueEmail': '',
            'valueContry': '',
            'valuePassword': '',
            'valueConfirmPassword': '',
            'valueCode': '',
            'valuePhone': ''
        }
        this.clickSignUpEmail = this.clickSignUpEmail.bind(this);
        this.clickSignUpPhone = this.clickSignUpPhone.bind(this);
    }
    clickSignUpEmail(){
        this.setState({
            'emailAddress': true,
            'phoneNumber': false,
            'showEmailAddress': true,
            'showPhoneNumber': false
    })
    }
    clickSignUpPhone(){
        this.setState({
            'emailAddress': false,
            'phoneNumber': true,
            'showEmailAddress': false,
            'showPhoneNumber': true
        })
    }
    render(){
        let classNameEmail = '';
        let classNamePhone = '';
        let classNameShowEmail = '';
        let classNameShowPhone = '';
        if(this.state.emailAddress){
            classNameEmail += 'activeSignUp';
        }
        if(this.state.phoneNumber){
            classNamePhone += 'activeSignUp';
        }
        if(this.state.showEmailAddress){
            classNameShowEmail += 'showSignUp';
        }
        if(this.state.showPhoneNumber){
            classNameShowPhone += 'showSignUp';
        }
        const initialValues ={
        
        };
        const validationSchema = Yup.object().shape({
            Email: Yup.string().email().required('This field is required'),
            password: Yup.string().required('This field is required'),
            Phone: Yup.number().typeError("That doesn't look like a phone number")
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
                                <div className="chooseSignUp">
                                    <button className={classNameEmail} onClick={this.clickSignUpEmail}>Email address</button>
                                    <button className={classNamePhone} onClick={this.clickSignUpPhone}>Phone number</button>
                                </div>
                                <div className={classNameShowEmail} style={{display:'none'}}>
                                    <Form>
                                        <FastField
                                            name = 'Email'
                                            type = 'text'
                                            component = {InputField}

                                            label = 'Email'
                                            placeholder = 'Nhập Email' 
                                        />
                                        <FastField
                                            name = 'Password'
                                            type = 'password'
                                            component = {InputField}

                                            label = 'Password'
                                            placeholder = 'Nhập Password' 
                                        />
                                        <FastField
                                            name = 'confirm Password'
                                            type = 'password'
                                            component = {InputField}

                                            label = 'confirmPassword'
                                            placeholder = 'Confirm Password' 
                                        />
                                        <Button>Submit</Button>
                                    </Form>
                                </div>
                                <div className={classNameShowPhone} style={{display:'none'}}>
                                    <Form>
                                        <FastField
                                            name = 'Contry'
                                            type = 'text'
                                            component = {InputField}

                                            label = 'Contry'
                                            placeholder = 'Nhập Contry' 
                                        />
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
                                            name = 'confirm Password'
                                            type = 'password'
                                            component = {InputField}

                                            label = 'confirmPassword'
                                            placeholder = 'Confirm Password' 
                                        />
                                        <Button>Submit</Button>
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
export default SignUp;