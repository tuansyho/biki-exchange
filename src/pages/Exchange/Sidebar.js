import React, { Component } from 'react';
import '../../App.css';
import Candle from '../../assets/image/candle.png';
import Indicator from '../../assets/image/indicaltor.png';
import Chart from '../../assets/image/chart.jpg';
import boardIcon from '../../assets/image/icon_board.png';
import imageTrading from '../../assets/image/image_trading.png';

class SideBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            ShowLimit: true,
            ShowMarket: false
        }        
        this.showBoardLimit = this.showBoardLimit.bind(this);
        this.showBoardMarket = this.showBoardMarket.bind(this);
    }
    showBoardLimit(){
        this.setState({
            ShowLimit: true,
            ShowMarket: false
        })
    }
    showBoardMarket(){
        this.setState({
            ShowLimit: false,
            ShowMarket: true
        })
    }
    render(){
        let classNameLimit = 'container';
        let classNameMarket = 'container';
        let classNameButtonLimit = '';
        let classNameButtonMarket = '';
        if(this.state.ShowLimit){
            classNameLimit += ' showTarget';
            classNameButtonLimit += 'bold';
        }
        if(this.state.ShowMarket){
            classNameMarket += ' showTarget';
            classNameButtonMarket += 'bold'
        }
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
                                <span style={{paddingLeft: '5px'}}> = </span>
                                <span style={{paddingLeft: '5px'}}>0.52</span>
                                <div className="rightChart">
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
                                <img src={Candle} alt="..." style={{height:'40px', paddingRight:'5px'}}></img>
                                <img src={Indicator} alt="..." style={{height:'40px', paddingRight:'5px'}}></img>
                                <img src={Chart} alt="..." style={{height:'40px', paddingRight:'5px'}}></img>
                                <div className='buttonLine'>
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
                                <div className="imageRight">
                                    <img src={Candle } alt="..." style={{height:'40px', paddingRight:'5px'}}></img>
                                    <img src={boardIcon} alt="..." style={{height:'40px'}}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={imageTrading} alt="..." style={{width:'957px'}}></img>
                    <div className="endBoard" style={{backgroundColor:'#222'}}>
                        <div style={{display:'flex', flexDirection:'row', backgroundColor:'#333'}}>
                            <button className={classNameButtonLimit} onClick={this.showBoardLimit} style={{backgroundColor:'#333', border:'none',height:'40px', color:'#eee'}}>Limit</button>
                            <button className={classNameButtonMarket} onClick={this.showBoardMarket} style={{backgroundColor:'#333', border:'none',height:'40px', color:'#eee'}}>Market</button>
                        </div>
                        <div className={classNameLimit} style={{display:'none', paddingTop:'20px'}}>
                            <div style={{display:'flex', flexDirection:'column', width:'48%'}}>
                                <table>
                                    <tr>
                                        <td>Buy ARCC</td>
                                        <td style={{display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>0 USDT</td>
                                    </tr>
                                </table>
                                <table style={{border:'1px solid #888'}}>
                                    <tr>
                                        <td>Price</td>
                                        <td style={{display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>USDT</td>
                                    </tr>
                                    <tr>
                                        <td>0.3999</td>
                                        <td></td>
                                    </tr>
                                    <tr style={{backgroundColor:'#666' }}>
                                        <td>
                                            <input type='text' placeholder='0.54' style={{height:'40px',backgroundColor:'#666', border:'none', color:'#fff', outline:'none'}}></input>
                                        </td>
                                        <td></td>
                                    </tr>
                                </table>
                                <table style={{border:'1px solid #888', margin:'10px 0'}}>
                                    <tr>
                                        <td>Amount</td>
                                        <td style={{display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>ARCC</td>
                                    </tr>
                                    <tr>
                                        <td>
                                           <input type='text' placeholder='' style={{height:'40px',backgroundColor:'#222', border:'none', color:'#fff', outline:'none'}}></input>
                                        </td>
                                        <td></td>
                                    </tr>
                                </table>
                                <table>
                                    <tr>
                                        <td>
                                            <div style={{border:'1px solid #888', margin:'5px',borderRadius:'3px'}}>25%</div>
                                        </td>
                                        <td>
                                            <div style={{border:'1px solid #888', margin:'5px',borderRadius:'3px'}}>50%</div>
                                        </td>
                                        <td>
                                            <div style={{border:'1px solid #888', margin:'5px',borderRadius:'3px'}}>75%</div>
                                        </td>
                                        <td>
                                            <div style={{border:'1px solid #888', margin:'5px',borderRadius:'3px'}}>100%</div>
                                        </td>
                                    </tr>
                                </table>
                                <p>Total</p>
                                <button style={{height:'50px', borderRadius:'5px', backgroundColor:'rgba(255,205,54,1)'}}>Submit</button>
                                
                            </div>
                            <div style={{display:'flex', flexDirection:'column', width:'48%', marginLeft:'40px'}}>
                                <table>
                                    <tr>
                                        <td>Sell ARCC</td>
                                        <td style={{display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>0 USDT</td>
                                    </tr>
                                </table>
                                <table style={{border:'1px solid #888'}}>
                                    <tr>
                                        <td>Price</td>
                                        <td style={{display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>USDT</td>
                                    </tr>
                                    <tr>
                                        <td>0.3999</td>
                                        <td></td>
                                    </tr>
                                    <tr style={{backgroundColor:'#666' }}>
                                        <td>
                                            <input type='text' placeholder='0.54' style={{height:'40px',backgroundColor:'#666', border:'none', color:'#fff', outline:'none'}}></input>
                                        </td>
                                        <td></td>
                                    </tr>
                                </table>
                                <table style={{border:'1px solid #888', margin:'10px 0'}}>
                                    <tr>
                                        <td>Amount</td>
                                        <td style={{display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>ARCC</td>
                                    </tr>
                                    <tr>
                                        <td>
                                           <input type='text' placeholder='' style={{height:'40px',backgroundColor:'#222', border:'none', color:'#fff', outline:'none'}}></input>
                                        </td>
                                        <td></td>
                                    </tr>
                                </table>
                                <table>
                                    <tr>
                                        <td>
                                            <div style={{border:'1px solid #888', margin:'5px',borderRadius:'3px'}}>25%</div>
                                        </td>
                                        <td>
                                            <div style={{border:'1px solid #888', margin:'5px',borderRadius:'3px'}}>50%</div>
                                        </td>
                                        <td>
                                            <div style={{border:'1px solid #888', margin:'5px',borderRadius:'3px'}}>75%</div>
                                        </td>
                                        <td>
                                            <div style={{border:'1px solid #888', margin:'5px',borderRadius:'3px'}}>100%</div>
                                        </td>
                                    </tr>
                                </table>
                                <p>Total</p>
                                <button style={{height:'50px', borderRadius:'5px', backgroundColor:'rgba(255,205,54,1)'}}>Submit</button>
                                
                            </div>
                        </div>
                        <div className={classNameMarket} style={{display:'none'}}>
                            <h2>market</h2>
                        </div>
                    </div>
                </div>

                <div className="rightExchange"></div>
            </div>
        )
    }
}
export default SideBar;