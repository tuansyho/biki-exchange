import React, { Component } from 'react';
import '../../App.css';

class BoardTrading extends Component{
    click24HList(){
        document.getElementsByClassName("bold")[0].className = "";
        document.getElementById("24HList").className = "bold";
        document.getElementsByClassName("show")[0].className = "";
        document.getElementById("table24HList").className = "show";

    }
    clickFavourite(){
        document.getElementsByClassName("bold")[0].className = "";
        document.getElementById("favourite").className = "bold";
        document.getElementsByClassName("show")[0].className = "";
        document.getElementById("tableFavourite").className = "show";
    }
    clickUSDT(){
        document.getElementsByClassName("bold")[0].className = "";
        document.getElementById("USDT").className = "bold";
        document.getElementsByClassName("show")[0].className = "";
        document.getElementById("tableUSDT").className = "show";
    }
    clickEFT(){
        document.getElementsByClassName("bold")[0].className = "";
        document.getElementById("EFT").className = "bold";
        document.getElementsByClassName("show")[0].className = "";
        document.getElementById("tableEFT").className = "show";
    }
    clickBTC(){
        document.getElementsByClassName("bold")[0].className = "";
        document.getElementById("BTC").className = "bold";
        document.getElementsByClassName("show")[0].className = "";
        document.getElementById("tableBTC").className = "show";
    }
    clickETH(){
        document.getElementsByClassName("bold")[0].className = "";
        document.getElementById("ETH").className = "bold";
        document.getElementsByClassName("show")[0].className = "";
        document.getElementById("tableETH").className = "show";
    }
    clickTRX(){
        document.getElementsByClassName("bold")[0].className = "";
        document.getElementById("TRX").className = "bold";
        document.getElementsByClassName("show")[0].className = "";
        document.getElementById("tableTRX").className = "show";
    }
    render(){
        return(
            <div className="boardTrading">
                <h3>Supports global and pupular token transactions</h3>
                <div className="tokenHot container">
                    <table style={{width: '100%'}}>
                        <tr>
                            <td style={{borderRight: '1px solid #eee'}}>
                                <p>BIKI/USDT</p>
                                <p className="red">0.04</p>
                                <p className="red">-2.31%</p>
                            </td>
                            <td style={{borderRight: '1px solid #eee'}}>
                                <p>BIKI/USDT</p>
                                <p className="red">0.04</p>
                                <p className="red">-2.31%</p>
                            </td>
                            <td style={{borderRight: '1px solid #eee'}}>
                                <p>BIKI/USDT</p>
                                <p className="red">0.04</p>
                                <p className="red">-2.31%</p>
                            </td>
                            <td>
                                <p>BIKI/USDT</p>
                                <p className="red">0.04</p>
                                <p className="red">-2.31%</p>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="allTable">
                    <div className="tableTrading" >
                        <div className="titleTrading">
                            <div className="titleLeft">
                                <button id="24HList" className="bold" onClick={this.click24HList} style={{paddingLeft: '20px'}}>24H Rising list</button>
                                <button id="favourite" onClick={this.clickFavourite}>Favourite</button>
                                <button id="USDT" onClick={this.clickUSDT}>USDT</button>
                                <button id="EFT" onClick={this.clickEFT}>EFT</button>
                                <button id="BTC" onClick={this.clickBTC}>BTC</button>
                                <button id="ETH" onClick={this.clickETH}>ETH</button>
                                <button id="TRX" onClick={this.clickTRX}>TRX</button>
                            </div>
                            <div className="titleRight">
                                <input placeholder="Search"></input>
                            </div>
                        </div>
                        <div id="table24HList" className="show" style={{display:'none'}}>
                            <div className="table24hList">
                                <table style={{width:'100%'}}>
                                    <tr>
                                        <th>Rank</th>
                                        <th>Pair</th>
                                        <th>Last Price</th>
                                        <th>Change</th>
                                        <th>24h vol</th>
                                        <th>Trade</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td style={{fontWeight:'1000'}}>CWV/USDT</td>
                                        <td>0.006227</td>
                                        <td style={{color:'green'}}>31.84%</td>
                                        <td>98876299.90</td>
                                        <td style={{color:'yellow'}}>Trade</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td style={{fontWeight:'1000'}}>CWV/USDT</td>
                                        <td>0.006227</td>
                                        <td style={{color:'green'}}>31.84%</td>
                                        <td>98876299.90</td>
                                        <td style={{color:'yellow'}}>Trade</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td style={{fontWeight:'1000'}}>CWV/USDT</td>
                                        <td>0.006227</td>
                                        <td style={{color:'green'}}>31.84%</td>
                                        <td>98876299.90</td>
                                        <td style={{color:'yellow'}}>Trade</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td style={{fontWeight:'1000'}}>CWV/USDT</td>
                                        <td>0.006227</td>
                                        <td style={{color:'green'}}>31.84%</td>
                                        <td>98876299.90</td>
                                        <td style={{color:'yellow'}}>Trade</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td style={{fontWeight:'1000'}}>CWV/USDT</td>
                                        <td>0.006227</td>
                                        <td style={{color:'green'}}>31.84%</td>
                                        <td>98876299.90</td>
                                        <td style={{color:'yellow'}}>Trade</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td style={{fontWeight:'1000'}}>CWV/USDT</td>
                                        <td>0.006227</td>
                                        <td style={{color:'green'}}>31.84%</td>
                                        <td>98876299.90</td>
                                        <td style={{color:'yellow'}}>Trade</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td style={{fontWeight:'1000'}}>CWV/USDT</td>
                                        <td>0.006227</td>
                                        <td style={{color:'green'}}>31.84%</td>
                                        <td>98876299.90</td>
                                        <td style={{color:'yellow'}}>Trade</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div id="tableFavourite" style={{display: 'none'}}>
                            <div className="favourite">
                                <table style={{width: '100%'}}>
                                    <tr>
                                        <th>Rank</th>
                                        <th>Pair</th>
                                        <th>Last Price</th>
                                        <th>Change</th>
                                        <th>24h vol</th>
                                        <th>Trade</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td style={{fontWeight:'1000'}}>CWV/USDT</td>
                                        <td>0.006227</td>
                                        <td style={{color:'green'}}>31.84%</td>
                                        <td>98876299.90</td>
                                        <td style={{color:'yellow'}}>Trade</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div id="tableUSDT" style={{display: 'none'}}>
                            <div className="USDT">
                            <table style={{width: '100%'}}>
                                <tr>
                                    <th>Rank</th>
                                    <th>Pair</th>
                                    <th>Last Price</th>
                                    <th>Change</th>
                                    <th>24h vol</th>
                                    <th>Trade</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td style={{fontWeight:'1000'}}>BIKI/USDT</td>
                                    <td>0.006227</td>
                                    <td style={{color:'green'}}>31.84%</td>
                                    <td>98876299.90</td>
                                    <td style={{color:'yellow'}}>Trade</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td style={{fontWeight:'1000'}}>BTC/USDT</td>
                                    <td>0.006227</td>
                                    <td style={{color:'green'}}>31.84%</td>
                                    <td>98876299.90</td>
                                    <td style={{color:'yellow'}}>Trade</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td style={{fontWeight:'1000'}}>ETH/USDT</td>
                                    <td>0.006227</td>
                                    <td style={{color:'green'}}>31.84%</td>
                                    <td>98876299.90</td>
                                    <td style={{color:'yellow'}}>Trade</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td style={{fontWeight:'1000'}}>EOS/USDT</td>
                                    <td>0.006227</td>
                                    <td style={{color:'green'}}>31.84%</td>
                                    <td>98876299.90</td>
                                    <td style={{color:'yellow'}}>Trade</td>
                                </tr>
                            </table>
                            </div>
                        </div>
                        <div id="tableEFT" style={{display: 'none'}}>
                            <div className="EFT">
                            <table style={{width: '100%'}}>
                                <tr>
                                    <th>Rank</th>
                                    <th>Pair</th>
                                    <th>Last Price</th>
                                    <th>Change</th>
                                    <th>24h vol</th>
                                    <th>Trade</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td style={{fontWeight:'1000'}}>CWV/EFT</td>
                                    <td>0.006227</td>
                                    <td style={{color:'green'}}>31.84%</td>
                                    <td>98876299.90</td>
                                    <td style={{color:'yellow'}}>Trade</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td style={{fontWeight:'1000'}}>CWV/EFT</td>
                                    <td>0.006227</td>
                                    <td style={{color:'green'}}>31.84%</td>
                                    <td>98876299.90</td>
                                    <td style={{color:'yellow'}}>Trade</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td style={{fontWeight:'1000'}}>CWV/EFT</td>
                                    <td>0.006227</td>
                                    <td style={{color:'green'}}>31.84%</td>
                                    <td>98876299.90</td>
                                    <td style={{color:'yellow'}}>Trade</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td style={{fontWeight:'1000'}}>CWV/EFT</td>
                                    <td>0.006227</td>
                                    <td style={{color:'green'}}>31.84%</td>
                                    <td>98876299.90</td>
                                    <td style={{color:'yellow'}}>Trade</td>
                                </tr>
                            </table>
                            </div>
                        </div>
                        <div id="tableBTC" style={{display: 'none'}}>
                            <div className="BTC">
                            <table style={{width: '100%'}}>
                                <tr>
                                    <th>Rank</th>
                                    <th>Pair</th>
                                    <th>Last Price</th>
                                    <th>Change</th>
                                    <th>24h vol</th>
                                    <th>Trade</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td style={{fontWeight:'1000'}}>CWV/BTC</td>
                                    <td>0.006227</td>
                                    <td style={{color:'green'}}>31.84%</td>
                                    <td>98876299.90</td>
                                    <td style={{color:'yellow'}}>Trade</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td style={{fontWeight:'1000'}}>CWV/BTC</td>
                                    <td>0.006227</td>
                                    <td style={{color:'green'}}>31.84%</td>
                                    <td>98876299.90</td>
                                    <td style={{color:'yellow'}}>Trade</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td style={{fontWeight:'1000'}}>CWV/BTC</td>
                                    <td>0.006227</td>
                                    <td style={{color:'green'}}>31.84%</td>
                                    <td>98876299.90</td>
                                    <td style={{color:'yellow'}}>Trade</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td style={{fontWeight:'1000'}}>CWV/BTC</td>
                                    <td>0.006227</td>
                                    <td style={{color:'green'}}>31.84%</td>
                                    <td>98876299.90</td>
                                    <td style={{color:'yellow'}}>Trade</td>
                                </tr>
                            </table>
                            </div>
                        </div>
                        <div id="tableETH" style={{display: 'none'}}>
                            <div className="ETH">
                            <table style={{width: '100%'}}>
                                <tr>
                                    <th>Rank</th>
                                    <th>Pair</th>
                                    <th>Last Price</th>
                                    <th>Change</th>
                                    <th>24h vol</th>
                                    <th>Trade</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td style={{fontWeight:'1000'}}>CWV/ETH</td>
                                    <td>0.006227</td>
                                    <td style={{color:'green'}}>31.84%</td>
                                    <td>98876299.90</td>
                                    <td style={{color:'yellow'}}>Trade</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td style={{fontWeight:'1000'}}>CWV/ETH</td>
                                    <td>0.006227</td>
                                    <td style={{color:'green'}}>31.84%</td>
                                    <td>98876299.90</td>
                                    <td style={{color:'yellow'}}>Trade</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td style={{fontWeight:'1000'}}>CWV/ETH</td>
                                    <td>0.006227</td>
                                    <td style={{color:'green'}}>31.84%</td>
                                    <td>98876299.90</td>
                                    <td style={{color:'yellow'}}>Trade</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td style={{fontWeight:'1000'}}>CWV/ETH</td>
                                    <td>0.006227</td>
                                    <td style={{color:'green'}}>31.84%</td>
                                    <td>98876299.90</td>
                                    <td style={{color:'yellow'}}>Trade</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td style={{fontWeight:'1000'}}>CWV/ETH</td>
                                    <td>0.006227</td>
                                    <td style={{color:'green'}}>31.84%</td>
                                    <td>98876299.90</td>
                                    <td style={{color:'yellow'}}>Trade</td>
                                </tr>
                            </table>
                            </div>
                        </div>
                        <div id="tableTRX" style={{display: 'none'}}>
                            <div className="TRX">
                            <table style={{width: '100%'}}>
                                <tr>
                                    <th>Rank</th>
                                    <th>Pair</th>
                                    <th>Last Price</th>
                                    <th>Change</th>
                                    <th>24h vol</th>
                                    <th>Trade</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td style={{fontWeight:'1000'}}>CWV/TRX</td>
                                    <td>0.006227</td>
                                    <td style={{color:'green'}}>31.84%</td>
                                    <td>98876299.90</td>
                                    <td style={{color:'yellow'}}>Trade</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td style={{fontWeight:'1000'}}>CWV/TRX</td>
                                    <td>0.006227</td>
                                    <td style={{color:'green'}}>31.84%</td>
                                    <td>98876299.90</td>
                                    <td style={{color:'yellow'}}>Trade</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td style={{fontWeight:'1000'}}>CWV/TRX</td>
                                    <td>0.006227</td>
                                    <td style={{color:'green'}}>31.84%</td>
                                    <td>98876299.90</td>
                                    <td style={{color:'yellow'}}>Trade</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td style={{fontWeight:'1000'}}>CWV/TRX</td>
                                    <td>0.006227</td>
                                    <td style={{color:'green'}}>31.84%</td>
                                    <td>98876299.90</td>
                                    <td style={{color:'yellow'}}>Trade</td>
                                </tr>
                            </table>
                            </div>
                        </div>
                    </div>     
                    <div className="allCurrencies">
                        <span>View all currencies</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default BoardTrading;