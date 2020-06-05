import React, { Component } from 'react';
import '../../App.css';
import appIos from '../../assets/image/appIOS.png';
import appAndroid from '../../assets/image/appAndroid.png';
import appAndroidAPK from '../../assets/image/appAndroidAPK.png';
import appScan from '../../assets/image/appScan.png';
import imageAboutApp from '../../assets/image/imageAboutApp.png';

class AboutApp extends Component{
    render(){
        return(
            <div className="aboutApp">
                <div className="contentAboutApp">
                    <h3>Trade anytime and </h3>
                    <h3 style={{paddingBottom:'40px'}}>anywhere</h3>
                    <p>Download BiKi APP, you will be able to easily at any time,</p>
                    <p style={{paddingBottom:'40px'}}>anywhere trading global mainstream, popular digital assets.</p>
                    <div className="boxImage">
                        <table>
                            <tr>
                                <td>
                                    <img src={appIos} alt='img'></img>
                                </td>
                                <td>
                                    <img src={appAndroid} alt='img'></img>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={appAndroidAPK} alt='img'></img>
                                </td>
                                <td>
                                    <img src={appScan} alt='img'></img>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            <div className="aboutAppRight">
                <img src={imageAboutApp} alt='...'></img>
            </div>
            </div>
        )
    }
}
export default AboutApp;