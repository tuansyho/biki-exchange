import React, { Component } from 'react';
import '../../App.css';
import { Button } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import { Formik, Form, FastField } from 'formik';
import InputField from './InputField.jsx';
import * as Yup from 'yup';
import firebaseConfig from '../../Firebase.jsx';
import "firebase/auth";
import * as firebase from "firebase/app";
import iconGoogle from '../../assets/image/icon_google.png';
import iconFacebook from '../../assets/image/icon_facebook.png';
import { Spinner } from 'reactstrap';



if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            login: false,
            loginWrong: false,
            loadding: false
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.google = this.google.bind(this);
        this.facebook = this.facebook.bind(this);
    }
    google(){
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
          this.setState({login: true});
        })
    }
    facebook(){
        var providers = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(providers).then((result) => {
          this.setState({login: true});
          })
    }
    onSubmit(event){
        this.setState({loginWrong: false,
                        loadding: true
                        })
        firebase.auth().signInWithEmailAndPassword(event.Email,event.password)
            .then((result) => {
                console.log(result);
                this.setState({login: true});
            })
            .catch( (error) => {
                this.setState({loginWrong: true});
            });   
            
    }
    render(){
        let classNameErrorLogin,classNameLoadding = '';
        if(this.state.loginWrong){
            classNameErrorLogin= ' error';
        }
        if(this.state.login){
            return <Redirect href="/"/>
        }
        if(this.state.loadding)
        {
            classNameLoadding = ' show';
        }
        const initialValues ={
            
        };
        const validationSchema = Yup.object().shape({
            Email: Yup.string().email().required('This field is required'),
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
                                    <button className="bold" >Email address</button>
                                    <Link to="loginPhone">
                                        <button  >Phone number</button>
                                    </Link>
                                </div>
                                <div className={classNameErrorLogin} style={{display: 'none'}}>Email does not exist or Password is wrong</div>
                                <div className={classNameLoadding} style={{display:'none'}}>
                                    <Spinner style={{ width: '3rem', height: '3rem' }} color='primary' />{' '}
                                </div>
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
                                <button onClick={this.google} style={{backgroundColor:'#eee', width:'300px', height:'50px', margin:'20px',padding:'0px' , borderRadius:'5px'}}>
                                    <span>Login with google</span>
                                    <img src={iconGoogle} alt='...' style={{height:'30px', marginLeft:'10px'}}></img>
                                </button>
                                <button onClick={this.facebook} style={{backgroundColor:'#eee', width:'300px', height:'50px', margin:'20px',padding:'0px' , borderRadius:'5px'}}>
                                    <span>Login with facebook</span>
                                    <img src={iconFacebook} alt='...' style={{height:'20px', marginLeft:'10px'}}></img>
                                </button>
                            </div>
                        </div>
                        );
                }}
            </Formik>
        )
    }
}
export default Login;