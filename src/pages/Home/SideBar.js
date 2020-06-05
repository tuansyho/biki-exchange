import React, { Component } from 'react';
import '../../App.css';


class SideBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            'slide1': true,
            'slide2': false,
            'showSlide11': true,
            'showSlide22': false
        }
        this.showSlide1 = this.showSlide1.bind(this);
        this.showSlide2 = this.showSlide2.bind(this);
    }
    showSlide1(){
        this.setState({
            'slide1': true,
            'slide2': false,
            'showSlide11': true,
            'showSlide22': false
        })
    }
    showSlide2(){
        this.setState({
            'slide1': false,
            'slide2': true,
            'showSlide11': false,
            'showSlide22': true
        })
    }
    render(){
        let classNameSlide1 = '';
        let classNameSlide2 = '';
        let classNameShowSlide11 = '';
        let classNameShowSlide22 = '';
        if(this.state.slide1){
            classNameSlide1 += 'activeButton';
        }
        if(this.state.slide2){
            classNameSlide2 += 'activeButton';
        }
        if(this.state.slide1){
            classNameShowSlide11 += 'active';
        }
        if(this.state.slide2){
            classNameShowSlide22 += 'active';
        }
        return(
            <div className="sideBar">
                <h3 className="title">Pupular Token's Choice</h3>
                <p className="title">Scure / Stable / Reliable</p>
                <div className="Slide">
                    <div className={classNameShowSlide11} id="slide1"  style={{display: 'none'}}>
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
                    <div className={classNameShowSlide22} id="slide2" style={{display: 'none'}}>
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
                    <button style={{width:'50px', height: '5px'}} className={classNameSlide1} id="button1" onClick={this.showSlide1}></button>
                    <button style={{width:'50px', height: '5px'}} className={classNameSlide2} id="button2" onClick={this.showSlide2}></button>
                </div>             
            </div>
        )
    }
}
export default SideBar;