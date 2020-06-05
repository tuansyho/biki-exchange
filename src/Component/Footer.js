import React, { Component } from 'react';
import '../App.css';
import imageBiki from '../assets/image/image_biki.png';

class Footer extends Component{
    render(){
        return(
            <div className="footer" style={{backgroundColor:'#111', padding:'80px 0 50px 50px'}}>
                <div className="titleFooter">
                    <div>
                        <img src={imageBiki} alt="..." style={{height:'30px'}}></img>
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
                        <td>About us</td>
                        <td>Exchange</td>
                        <td>Help Center</td>
                        <td>Terms of service</td>
                        <td>We have more than 200,000 community users worldwide, join us today!</td>
                    </tr>
                    <tr>
                        <td>Annoucement</td>
                        <td>Fiat</td>
                        <td>Listing</td>
                        <td>Disclaimer</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Contact us</td>
                        <td>BiKiPower</td>
                        <td>Broker platform</td>
                        <td>Privacy agreement</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Blog</td>
                        <td>BiKi Mining Pool</td>
                        <td>APP Download</td>
                        <td>About Rates</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>API</td>
                        <td></td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default Footer;