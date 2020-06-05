import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

class Login extends Component{
    render(){
        return(
            <div className="signUp">
                <div className="headerSignUp">
                    <h2 style={{paddingTop: '70px'}}> Welcome to register</h2>
                    <p>Already have account?</p>
                    <Link to="/signup">Sign up</Link>
                </div>
                <div className="contentSignUp">
                <div className="contentSignUp">
                    <input className="inputSignUp" placeholder="Email address"></input>
                    <input className="inputSignUp" placeholder="Password"></input>
                    <button className="submitSignUp">Login</button>
                </div>
                </div>
            </div>
        )
    }
}
export default Login;