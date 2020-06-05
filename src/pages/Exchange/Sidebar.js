import React, { Component } from 'react';
import '../../App.css';

class SideBar extends Component{
    render(){
        return(
            <div className="sideBarExchange">
                <div className="leftExchange">
                    <p>USTD</p>
                    <div className="spanExchange">
                        <span>Markets</span>
                    </div>
                    <div className="spanExchange">
                        <span>Main area</span>
                    </div>
                    <p>BIKI</p>
                    <p>BTC</p>
                    <p>ETH</p>
                    <p>EOS</p>
                    <p>TRX</p>
                    <p>LTC</p>
                    <p>BCH</p>
                    <p>BSV</p>
                    <p>ETC</p>
                    <p>XRP</p>
                    <p>DASH</p>
                    <p>DOGE</p>
                    <p>ADA</p>
                    <p>ATOM</p>
                    <p>HT</p>
                    <p>OKB</p>
                    <p>BNB</p>
                    <p>GT</p>
                    <p>BTS</p>
                    <p>QTUM</p>
                    <p>ONT</p>
                    <p>NEO</p>
                    <p>BTT</p>
                    <p>BTM</p>
                    <p>LEO</p>
                </div>
                <div className="boardExchange">
                    <div className="contentExchange">
                        <div className="headerContentExchange">
                            <div className="top">
                                <p>ARCC/USDT</p>
                                <span>0.52</span>
                                <div>
                                    <table>
                                        <tr>
                                            <th>Change</th>
                                            <th>High</th>
                                            <th>Low</th>
                                            <th>24hr Vol</th>
                                        </tr>
                                        <tr>
                                            <td>+3.59%</td>
                                            <td>0.568</td>
                                            <td>0.485</td>
                                            <td>276099 ARCC</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div className="bot">
                                {/* <img src={candle}></img>
                                <img src={indicator}></img>
                                <img src={chart}></img> */}
                                <button>Line</button>
                                <button>1min</button>
                                <button>5min</button>
                                <button>15min</button>
                                <button>30min</button>
                                <button>60min</button>
                                <button>4h</button>
                                <button>1day</button>
                                <button>1week</button>
                                <button>1month</button>
                                <button>Full screen</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightExchange"></div>
            </div>
        )
    }
}
export default SideBar;