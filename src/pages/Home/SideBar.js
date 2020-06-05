import React, { Component } from 'react';
import '../../App.css';


class SideBar extends Component{
    showSlide1(){
        document.getElementsByClassName("active")[0].className = '';
        document.getElementById("slide1").className = 'active';
        document.getElementsByClassName("activeButton")[0].className = '';
        document.getElementById("button1").className = 'activeButton';
    }
    showSlide2(){
        document.getElementsByClassName("active")[0].className = '';
        document.getElementById("slide2").className = 'active';
        document.getElementsByClassName("activeButton")[0].className = '';
        document.getElementById("button2").className = 'activeButton';
    }
    buttonSlide
    render(){
        return(
            <div className="sideBar">
                <h3 className="title">Pupular Token's Choice</h3>
                <p className="title">Scure / Stable / Reliable</p>
                <div className="Slide">
                    <div className="active chooseSlide" id="slide1"  style={{display: 'none'}}>
                        <div className="slide slide1 ">
                            <div className="box">
                                <h3>Biki Mining Pool</h3>
                                <p>ARCC Lock Staking Enjoy</p> <p>96% Annualized Yield</p>
                                <p className="time">05/28, 12:00-05/31, 00:00 (GMT +8)</p>
                            </div>
                            <div className="box">
                                <h3>Biki Mining Pool</h3>
                                <p>ARCC Lock Staking Enjoy</p> <p>96% Annualized Yield</p>
                                <p className="time">05/28, 12:00-05/31, 00:00 (GMT +8)</p>
                            </div>
                            <div className="box">
                                <h3>Biki Mining Pool</h3>
                                <p>ARCC Lock Staking Enjoy</p> <p>96% Annualized Yield</p>
                                <p className="time">05/28, 12:00-05/31, 00:00 (GMT +8)</p>
                            </div>
                            <div className="box">
                                <h3>Biki Mining Pool</h3>
                                <p>ARCC Lock Staking Enjoy</p> <p>96% Annualized Yield</p>
                                <p className="time">05/28, 12:00-05/31, 00:00 (GMT +8)</p>
                            </div>
                        </div>
                    </div>
                    <div className="chooseSlide" id="slide2" style={{display: 'none'}}>
                        <div className="slide slide2">
                            <div className="box">
                                <h3>Biki Mining Pool</h3>
                                <p>ARCC Lock Staking Enjoy</p> <p>96% Annualized Yield</p>
                                <p className="time">05/28, 12:00-05/31, 00:00 (GMT +8)</p>
                            </div>
                            <div className="box">
                                <h3>Biki Mining Pool</h3>
                                <p>ARCC Lock Staking Enjoy</p> <p>96% Annualized Yield</p>
                                <p className="time">05/28, 12:00-05/31, 00:00 (GMT +8)</p>
                            </div>
                            <div className="box">
                                <h3>Biki Mining Pool</h3>
                                <p>ARCC Lock Staking Enjoy</p> <p>96% Annualized Yield</p>
                                <p className="time">05/28, 12:00-05/31, 00:00 (GMT +8)</p>
                            </div>
                            <div className="box" style={{opacity: 0}}>
                            </div>
                        </div>
                    </div>
                </div>   
                <div className="buttonChoose">
                    <button style={{width:'50px', height: '5px'}} className=" activeButton" id="button1" onClick={this.showSlide1}></button>
                    <button style={{width:'50px', height: '5px'}} className="" id="button2" onClick={this.showSlide2}></button>
                </div>             
            </div>
        )
    }
}
export default SideBar;