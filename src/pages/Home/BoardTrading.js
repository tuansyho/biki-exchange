import React, { Component } from 'react';
import '../../App.css';

class BoardTrading extends Component{
    constructor(props){
        super(props)
        this.state = {
            'list': true,
            'favourite': false,
            'USDT': false,
            'EFT': false,
            'BTC':false,
            'ETH': false,
            'TRX': false,
        }
        this.click24HList = this.click24HList.bind(this);
        this.clickFavourite = this.clickFavourite.bind(this);
        this.clickUSDT = this.clickUSDT.bind(this);
        this.clickBTC = this.clickBTC.bind(this);
        this.clickEFT = this.clickEFT.bind(this);
        this.clickETH = this.clickETH.bind(this);
        this.clickTRX = this.clickTRX.bind(this);
    }
    click24HList(){
        this.setState({
            'list': true,
            'favourite': false,
            'USDT': false,
            'EFT': false,
            'BTC':false,
            'ETH': false,
            'TRX': false,
        })
    }
    clickFavourite(){
        this.setState({
            'list': false,
            'favourite': true,
            'USDT': false,
            'EFT': false,
            'BTC':false,
            'ETH': false,
            'TRX': false,
        })
    }
    clickUSDT(){
        this.setState({
            'list': false,
            'favourite': false,
            'USDT': true,
            'EFT': false,
            'BTC':false,
            'ETH': false,
            'TRX': false,
        })
    }
    clickEFT(){
        this.setState({
            'list': false,
            'favourite': false,
            'USDT': false,
            'EFT': true,
            'BTC':false,
            'ETH': false,
            'TRX': false,
        })
    }
    clickBTC(){
        this.setState({
            'list': false,
            'favourite': false,
            'USDT': false,
            'EFT': false,
            'BTC': true,
            'ETH': false,
            'TRX': false,
        })
    }
    clickETH(){
        this.setState({
            'list': false,
            'favourite': false,
            'USDT': false,
            'EFT': false,
            'BTC':false,
            'ETH': true,
            'TRX': false,
        })
    }
    clickTRX(){
        this.setState({
            'list': false,
            'favourite': false,
            'USDT': false,
            'EFT': false,
            'BTC':false,
            'ETH': false,
            'TRX': true,
        })
    }
    render(){
        let className24HList = '';
        let classNameFavourite = '';
        let classNameUSDT = '';
        let classNameEFT = '';
        let classNameBTC = '';
        let classNameETH = '';
        let classNameTRX = '';
        let classNameShow24HList = '';
        let classNameShowFavourite = '';
        let classNameShowUSDT = '';
        let classNameShowEFT = '';
        let classNameShowBTC = '';
        let classNameShowETH = '';
        let classNameShowTRX = '';
        if(this.state.list){
            className24HList += 'bold';
            classNameShow24HList += 'show'
        }
        if(this.state.favourite){
            classNameFavourite += 'bold';
            classNameShowFavourite += 'show'
        }
        if(this.state.USDT){
            classNameUSDT += 'bold';
            classNameShowUSDT += 'show'
        }
        if(this.state.EFT){
            classNameEFT += 'bold';
            classNameShowEFT += 'show'
        }
        if(this.state.BTC){
            classNameBTC += 'bold';
            classNameShowBTC += 'show'
        }
        if(this.state.ETH){
            classNameETH += 'bold';
            classNameShowETH += 'show'
        }
        if(this.state.TRX){
            classNameTRX += 'bold';
            classNameShowTRX += 'show'
        }
        return(
            <div className="boardTrading" style={{backgroundColor:'#333'}}>
                <h3 align='center'>Supports global and pupular token transactions</h3>
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
                                <button id="24HList" className={className24HList} onClick={this.click24HList} style={{paddingLeft: '20px'}}>24H Rising list</button>
                                <button className={classNameFavourite} id="favourite" onClick={this.clickFavourite}>Favourite</button>
                                <button className={classNameUSDT} id="USDT" onClick={this.clickUSDT}>USDT</button>
                                <button className={classNameEFT} id="EFT" onClick={this.clickEFT}>EFT</button>
                                <button className={classNameBTC} id="BTC" onClick={this.clickBTC}>BTC</button>
                                <button className={classNameETH} id="ETH" onClick={this.clickETH}>ETH</button>
                                <button className={classNameTRX} id="TRX" onClick={this.clickTRX}>TRX</button>
                            </div>
                            <div className="titleRight">
                                <input placeholder="Search"></input>
                            </div>
                        </div>
                        <div id="table24HList" className={classNameShow24HList} style={{display:'none'}}>
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
                        <div id="tableFavourite" className={classNameShowFavourite} style={{display: 'none'}}>
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
                        <div id="tableUSDT" className={classNameShowUSDT} style={{display: 'none'}}>
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
                        <div id="tableEFT" className={classNameShowEFT} style={{display: 'none'}}>
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
                        <div id="tableBTC" className={classNameShowBTC} style={{display: 'none'}}>
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
                        <div id="tableETH" className={classNameShowETH} style={{display: 'none'}}>
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
                        <div id="tableTRX" className={classNameShowTRX} style={{display: 'none'}}>
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