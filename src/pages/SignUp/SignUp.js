import React, { Component } from 'react';
import '../../App.css';
import { FormGroup, Label, Input, } from 'reactstrap';
import { Link } from 'react-router-dom';


class SignUp extends Component{
    constructor(props){
        super(props)
        this.state = {
            'emailAddress': true,
            'phoneNumber': false,
            'showEmailAddress': true,
            'showPhoneNumber': false
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
                        <input className="inputSignUp" placeholder="Email address"></input>
                        <input className="inputSignUp" placeholder="Password"></input>
                        <input className="inputSignUp" placeholder="Confirm password"></input>
                        <input className="inputSignUp" placeholder="Code"></input>
                    </div>
                    <div className={classNameShowPhone} style={{display:'none'}}>
                        <input className="inputSignUp" placeholder="Contry"></input>
                        <input className="inputSignUp" placeholder="Phone Number"></input>
                        <input className="inputSignUp" placeholder="Password"></input>
                        <input className="inputSignUp" placeholder="Confirm password"></input>
                        <input className="inputSignUp" placeholder="Code"></input>
                    </div>
                    <FormGroup check>
                        <Label style={{margin: '40px 0 40px 0'}} check>
                        <Input type="checkbox" />{' '}
                        I have read and agreed BiKi
                        </Label>
                    </FormGroup>
                    <button className="submitSignUp">Sign Up</button>
                </div>
            </div>
        )
    }
}
export default SignUp;