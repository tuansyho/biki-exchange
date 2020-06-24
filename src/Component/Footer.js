import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import imageBiki from '../assets/image/image_biki.png';
import iconTwitter from '../assets/image/icon_twitter.png';
import iconTelegram from '../assets/image/icon_telegram.png';
import iconFacebook from '../assets/image/icon_facebook.png';
import iconWhatSup from '../assets/image/icon_whatSup.png';
import iconMedium from '../assets/image/icon_medium.png';
import iconBiYoung from '../assets/image/icon_biYoung.png';
import iconDiscord from '../assets/image/icon_discord.png';


class Footer extends Component{
    render(){
        return(
            <div className="footer" style={{backgroundColor:'#111', padding:'80px 0 50px 50px'}}>
                <div className="titleFooter">
                    <div>
                        <a href="#home">
                            <img src={imageBiki} alt="..." style={{height:'30px'}}></img>
                        </a>
                        <p style={{paddingTop: '6px'}}>Copyright © 2020 BiKi Inc. All rights reserved</p>
                    </div>
                    <div style={{paddingLeft: '60px'}}>
                        <h4>Online customer service</h4>
                        <p>24/7 professional customer service</p>
                    </div>
                </div>
                <table>
                    <tr>
                        <th>Biki</th>
                        <th>Product</th>
                        <th>Services</th>
                        <th>Support</th>
                        <th>Community</th>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/aboutUs'>About us</Link>
                        </td>
                        <td>
                            <Link to='/exchange'>Exchange</Link>
                        </td>
                        <td>
                            <Link to='/helpCenter'>Help Center</Link>
                        </td>
                        <td>
                            <Link to='/termsOfService'>Terms of service</Link>
                        </td>
                        <td>We have more than 200,000 community users worldwide, join us today!</td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/announcement'>Annoucement</Link>
                        </td>
                        <td>
                            <Link to='/fiat'>Fiat</Link>
                        </td>
                        <td>
                            <Link to='/listing'>Listing</Link>
                        </td>
                        <td>
                            <Link to='/disclaimer'>Disclaimer</Link>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/contractUs'>Contact us</Link>
                        </td>
                        <td>
                            <Link to='/bikiPower'>BiKiPower</Link>
                        </td>
                        <td>
                            <Link to='/brokerPlatform'>Broker platform</Link>
                        </td>
                        <td>
                            <Link to='/privacyAgreement'>Privacy agreement</Link>
                        </td>
                        <td>
                            <img style={{height:'40px', borderRadius:'10px', marginRight:'20px'}} src={iconTwitter} alt='...'></img>
                            <img style={{height:'40px', borderRadius:'10px', marginRight:'20px'}} src={iconTelegram} alt='...'></img>
                            <img style={{height:'40px', borderRadius:'10px', marginRight:'20px'}} src={iconFacebook} alt='...'></img>
                            <img style={{height:'40px', borderRadius:'10px', marginRight:'20px'}} src={iconWhatSup} alt='...'></img>
                            <img style={{height:'40px', borderRadius:'10px', marginRight:'20px'}} src={iconMedium} alt='...'></img>
                            <img style={{height:'40px', borderRadius:'10px', marginRight:'20px'}} src={iconBiYoung} alt='...'></img>
                            <img style={{height:'40px', borderRadius:'10px', marginRight:'20px'}} src={iconDiscord} alt='...'></img>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/blog'>Blog</Link>
                        </td>
                        <td>
                            <Link to='/bikiMiningPool'>BiKi Mining Pool</Link>
                        </td>
                        <td>
                            <Link to='/appDownload'>APP Download</Link>
                        </td>
                        <td>
                            <Link to='/aboutRates'>About Rates</Link>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <Link to='/api'>API</Link>
                        </td>
                        <td></td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default Footer;