import React, { Component } from 'react';
import '../../App.css';
import { Button } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import { Formik, Form, FastField } from 'formik';
import InputField from './InputField.js';
import * as Yup from 'yup';
import * as firebase from "firebase/app";
import firebaseConfig from '../../Firebase.jsx';
import "firebase/auth";

class SignUp extends Component{
    
    constructor(props){
        
        super(props)
        this.state ={
            signUp: false,
            emailExist: false
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onSubmit(event){
        let email, password;
        email = event.Email;
        password = event.Password;
        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result);
                this.setState({signUp: true});
            })
            .catch( (error) => {
                this.setState({emailExist: true});
            });         
    }
    render(){
        let classNameError = 'sss';
        if(this.state.signUp){
            return <Redirect to="/login"/>
        }
        if(this.state.emailExist){
            classNameError += ' error';
        }
        const initialValues ={
        
        };
        const validationSchema = Yup.object().shape({
            Email: Yup.string().email().typeError('This field is email'),
            Password: Yup.string()
                .min(8)
                .max(14)
                .required('Password is required'),
            PasswordConfirm: Yup.string()
                .oneOf([Yup.ref('Password'), null], 'Passwords must match')
                .required('Password confirm is required')
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
                                    <button className="bold" >Email address</button>
                                    <Link to="signUpPhone">
                                        <button>Phone number</button>
                                    </Link>
                                </div>
                                <div id = "error" className={classNameError} style={{display: 'none'}}>Email already exist</div>
                                <div>
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
export default SignUp;