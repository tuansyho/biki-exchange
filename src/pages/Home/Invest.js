import React, { Component } from 'react';
import nodeCapital from "../../assets/image/nodeCapital.png"
import genesis from "../../assets/image/genesis.png"
import chainUp from "../../assets/image/chainUp.png"
import FBGCapital from "../../assets/image/FBGCapital.png"
import '../../App.css';

 class Invest extends Component{
     render(){
         return(
             <div className="invest">
                 <h3>Institutional Investors</h3>
                 <div className="boxImageInvest" style={{paddingBottom:'100px'}}>
                     <img style={{paddingRight: '50px'}} src={nodeCapital} alt="..."></img>
                     <img style={{paddingRight: '50px'}} src={genesis} alt="..."></img>
                     <img style={{paddingRight: '50px'}} src={chainUp} alt="..."></img>
                     <img src={FBGCapital} alt="..."></img>
                 </div>
                 <div  align="center" style={{height:'5px', width:'100px', backgroundColor: '#888', borderRadius:'5px'}}></div>
                <h3>Start trading on BiKi</h3>
                <p style={{fontSize:'25px', paddingBottom: '50px'}}>Start your trading freely in Bitcoin and many others cryptocurrencies in just 2 minutes!</p>
                <div style={{paddingBottom:'70px'}}>
                    <input placeholder="Your mobie number or email address"></input>
                    <button>Create account</button>
                </div>           
             </div>
         )
     }
 }
 export default Invest; 