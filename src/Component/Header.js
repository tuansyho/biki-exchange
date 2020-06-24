import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../App.css';
import imageBiki from '../assets/image/image_biki.png';
import { Link } from "react-router-dom";
import firebaseConfig from '../Firebase.jsx';
import "firebase/auth";
import * as firebase from "firebase/app";
import iconLogOut from "../assets/image/icon_logOut.png";

const Example = (props) => {
        const [dropDownValue, setDropDownValue] = React.useState("Language");
        const [isUser, setIsUser] = React.useState(false);
        const [isOpen, setIsOpen] = React.useState(false);
        const [dropdownOpen, setDropdownOpen] = React.useState(false);
        const toggle = () => setIsOpen(!isOpen);
        const togglee = () => setDropdownOpen(prevState => !prevState);
        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }
        firebase.auth().onAuthStateChanged(function(user) {
            setIsUser(!!user);  
          });
        const user = firebase.auth().currentUser;
        console.log("");
        let email;
        let classNameUserEmail = '';
        let classNameDivLogin = '';
        if(isUser){
            classNameUserEmail += ' show';
            email = user.email;
        }
        else{
            classNameDivLogin += 'show';
        }
        return (
              <div id="home" className="header">
                 <div>
                    <Navbar color="darder" light expand="md">
                        <NavbarBrand>
                            <Link to="/">
                                <img src={imageBiki} alt='imageBiki'></img>
                            </Link>
                        </NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                            <NavLink>
                                <Link to="/exchange">
                                    Exchange
                                </Link>
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink>
                                <Link to="/fiat">
                                    Fiat
                                </Link>
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink>
                                <Link to="/contract">
                                    Contract
                                </Link>    
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink>
                                <Link to="/leverage">
                                    Leverage
                                </Link>
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink>
                                <Link to="/eft">
                                    EFT
                                </Link>
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink>
                                <Link to="/fastloan">
                                    FastLoan
                                </Link>
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink>
                                <Link to="/BikiMiningPool">
                                    Biki Mining Pool
                                </Link>
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink>
                                <Link to="/bikipower">
                                    Biki Power
                                </Link>
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink>
                                <Link to="/appdownload">
                                    APP Download
                                </Link>
                            </NavLink>
                            </NavItem>
                        </Nav>
                        </Collapse>
                        <div className ="headerRight">
                            <div className={classNameUserEmail} style={{display: 'none'}}>
                                <span style={{color:'#eee', paddingRight:'10px', fontWeight: '500'}}>{email}</span>
                                <button onClick={() => {
                                     firebase.auth().signOut().then(function() {
                                        setIsUser(false);
                                      }).catch(function(error) {
                                        // An error happened.
                                      });
                                }}>
                                    <img src={iconLogOut} alt='...' style={{height:'30px'}}></img>
                                </button>   
                            </div>
                            <div className={classNameDivLogin} style={{display: 'none'}}>
                                <Link style={{marginRight: '30px'}} to="/login">
                                    Login
                                </Link>
                                <Link style={{marginRight: '30px'}} to="/signup">
                                    Sign up
                                </Link>
                            </div>
                            <Dropdown isOpen={dropdownOpen} toggle={togglee} style={{marginLeft:'10px'}}>
                                <DropdownToggle caret>
                                    {dropDownValue}
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={ (e) => {setDropDownValue (e.currentTarget.textContent)}}> English </DropdownItem>
                                    <DropdownItem onClick={ (e) => {setDropDownValue (e.currentTarget.textContent)}}> VietNames</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </Navbar>
                </div>
            </div>
          )
        }
export default Example;