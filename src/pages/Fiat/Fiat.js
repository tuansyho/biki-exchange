import React, { Component } from 'react';
import '../../App.css';
import buy from '../../assets/image/buy.png';
import blockTrades from '../../assets/image/blockTrades.png';
import buyWithCard from '../../assets/image/buyWithCard.png';
import publicsAd from '../../assets/image/publicsAd.jpg';

class Fiat extends Component{
    render(){
        return(
        <div className="fiat">
            <div className="container">
                <div className="leftFiat">
                    <h5>Fiat</h5>
                    <div className="buySell">
                        <img src={buy} alt="..."></img>
                        <span>Buy/Sell</span>
                        <ul style={{listStyle:'none'}}>
                            <li style={{padding:'10px'}}>Buy</li>
                            <li style={{padding:'10px'}}>Sell</li>
                        </ul>
                    </div>
                    <div className="blockTrades">
                        <img src={blockTrades} alt="..."></img>
                        <span>Block Trades</span>
                        <ul style={{listStyle:'none'}}>
                            <li style={{padding:'10px'}}>Buy</li>
                            <li style={{padding:'10px'}}>Sell</li>
                        </ul>
                    </div>
                    <div className="buyWithCard">
                        <img src={buyWithCard} alt="..."></img>
                        <span>Buy With Card</span>
                        <ul style={{listStyle:'none'}}>
                            <li style={{padding:'10px'}}>Buy</li>
                            <li style={{padding:'10px'}}>Sell</li>
                        </ul>
                    </div>
                    <div className="publicsAd">
                        <img src={publicsAd} alt="..."></img>
                        <span>Publics ad</span>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Fiat;