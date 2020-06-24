import React, { Component } from 'react';
import '../../App.css';
import firebase from 'firebase/app';
import firebaseConfig from '../../Firebase';
import 'firebase/firestore';
import changeSlideRight from '../../assets/image/icon_changeSlideRight.png';
import changeSlideLeft from '../../assets/image/icon_changeSlideLeft.png';



class SideBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            'slide1': true,
            'slide2': false,
            box: null,
            boxSlide2: null
        }
        this.showSlide1 = this.showSlide1.bind(this);
        this.showSlide2 = this.showSlide2.bind(this);
        this.changeSlide = this.changeSlide.bind(this);
    }
    changeSlide(){
        this.setState({
            slide1: !this.state.slide1,
            slide2: !this.state.slide2
        })
    }
    showSlide1(){
        this.setState({
            'slide1': true,
            'slide2': false,
        })
    }
    componentWillMount(){
        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }
        firebase.firestore().collection('box').get()
            .then( snapshot => {
                const infoBox = [];
                snapshot.forEach(doc => {
                    infoBox.push(doc.data());
                    this.setState({box: infoBox})
                })
            })
        firebase.firestore().collection('boxSlide2').get()
        .then( snapshot => {
            const infoBox = [];
            snapshot.forEach(doc => {
                infoBox.push(doc.data());
                this.setState({boxSlide2: infoBox})
            })
        })
        setInterval(this.changeSlide,5000);  
    }
    showSlide2(){
        this.setState({
            'slide1': false,
            'slide2': true,
        })
    }
    render(){
        
        let classNameShowSlide11 = '';
        let classNameSlide1 = '';
        let classNameSlide2 = '';
        let classNameShowSlide22= '';
        
        
        if(this.state.slide1){
            classNameShowSlide11 += 'active';
            classNameSlide1 += 'chooseButton';
        }
        if(this.state.slide2){
            classNameShowSlide22 += 'active';
            classNameSlide2 += ' chooseButton';
        }
        return(
            <div className="sideBar">
                <h3 className="title">Pupular Token's Choice</h3>
                <p className="title">Scure / Stable / Reliable</p>
                <div className="Slide">
                    <button className='activeButton' id="button1" onClick={this.showSlide1}>
                        <img alt='...' style={{height:'80px'}} src={changeSlideLeft}></img>
                    </button>
                    <div className={classNameShowSlide11} id="slide1"  style={{display: 'none'}}>
                        <div className="slide slide1 ">
                            {   this.state.box &&
                                this.state.box.map(info => {
                                    return(
                                        <div className="box">
                                            <h3>{info.title}</h3>
                                            <p>{info.subtitle}</p> <p>{info.text}</p>
                                            <p className="time">{info.date}</p>
                                        </div>
                                    )
                                })
                                
                            }
                        </div>
                    </div>
                    <div className={classNameShowSlide22} id="slide2" style={{display: 'none'}}>
                        <div className="slide slide2">
                            {   this.state.boxSlide2 &&
                                this.state.boxSlide2.map(info => {
                                    return(
                                        <div className="box">
                                            <h3>{info.title}</h3>
                                            <p>{info.subtitle}</p> <p>{info.text}</p>
                                            <p className="time">{info.date}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <button className='activeButton buttonRight' id="button2" onClick={this.showSlide2}>
                    <img alt='...' style={{height:'80px'}} src={changeSlideRight}></img>  
                    </button>
                </div><div className="buttonChoose">
                    <button style={{width:'50px', height: '5px'}} className={classNameSlide1} id="button1" onClick={this.showSlide1}></button>
                    <button style={{width:'50px', height: '5px'}} className={classNameSlide2} id="button2" onClick={this.showSlide2}></button>
                </div>

            </div>
        )
    }
}
export default SideBar;