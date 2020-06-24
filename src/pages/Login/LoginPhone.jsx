import React, { Component } from 'react';
import '../../App.css';
import { Button } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import { Formik, Form, FastField } from 'formik';
import InputField from './InputField.jsx';
import * as Yup from 'yup';
import * as firebase from "firebase/app";
// import firebaseConfig from '../../Firebase.jsx';
import "firebase/auth";






class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            login: false,
            phone: false,
            password: false
        }
        this.onSubmit = this.onSubmit.bind(this);

    }

    onSubmit(event){
        this.setState({phone: false});
        this.setState({password: false});
        firebase
            .firestore()
            .collection('Phone')
            .onSnapshot((items) => {
                const check = items.docs.find((item) =>{  return item.data().phone === event.Phone});
                const password = items.docs.find((pass) => { return pass.data().password === event.password})
                if(!check){
                    this.setState({phone: true})
                }
                else{
                    if(password){
                        this.setState({login: true});
                    }
                    else{
                        this.setState({password: true})
                    }
                }
            })     
    }
    render(){
        let classNameErrorPhone, classNameErrorPassword = '';   

        if(this.state.phone){
            classNameErrorPhone += ' error';
        }
        if(this.state.password){
            classNameErrorPassword += ' error';
        }
        if(this.state.login){
            return <Redirect to="/exchange"/>
        }
        const initialValues ={
            
        };
        const validationSchema = Yup.object().shape({
            Phone: Yup.number()
            .typeError("That doesn't look like a phone number")
            .integer('A phone is number')
            .min(1000000000, 'A phone number min 9 numbers')
            .max(99999999999, 'A phone number max 10 numbers')
            .required('A phone number is required')
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
                                <Link to="/signUp">Sign up</Link>
                            </div>
                            <div className="contentSignUp">
                                <div className="chooseSignUp">
                                    <Link to="login">
                                        <button>Email address</button>
                                    </Link>
                                    <button className="bold" >Phone number</button>
                                </div>
                                <div className={classNameErrorPhone} style={{display: 'none'}}>Phone does not exist</div>
                                <div className={classNameErrorPassword} style={{display: 'none'}}>Password is wrong</div>
                                <Form>
                                    <FastField
                                        name = 'Phone'
                                        type = 'text'
                                        component = {InputField}

                                        label = 'Phone'
                                        placeholder = 'Phone number' 
                                    />
                                    <FastField
                                        name = 'password'
                                        type = 'password'
                                        component = {InputField}

                                        label = 'Passworrd'
                                        placeholder = 'Password' 
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