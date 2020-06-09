import React,{ Component } from 'react';
import '../../App.css';
import GCKToken from '../../assets/image/GCK_token.png'

class BikiMiningPool extends Component{
    render(){
        return(
            <div className="bikiMiningPool">
                <div className="headerBikiMiningPool">
                    <button>Announcement</button>
                </div>
                <div className="contentBikiMiningPool" style={{backgroundColor:'#222', color:'#eee'}}>
                    <div className="container">
                        <div style={{display:'flex', flexDirection:'row',width:'100%'}}>
                            <p>Staking</p>
                            <div  style={{display:'flex', flexDirection:'row',justifyContent:'flex-end',width:'100%'}}>
                                <a href='...'>My POS record</a>
                            </div>
                        </div>
                        <div className="listTitle">
                                <ul>
                                    <li>All</li>
                                    <li>Lock Staking</li>
                                    <li>HODL Staking</li>
                                    <li>MainStream Token Staking</li>
                                    <li>Exchange Token Staking</li>
                                    <li>Popular Token Staking</li>
                                </ul>
                        </div>
                        <div className="status">
                            <ul>
                                <li>All</li>
                                <li>Pending</li>
                                <li>Processing</li>
                                <li>Finished</li>
                            </ul>
                        </div>
                        <div className="boxToken">
                            <img src={GCKToken} alt="..." style={{height:'90px'}}></img>
                            <div style={{padding:'0 170px 0 20px', borderRight:'1px solid #888',height:'70px'}}>
                                <h2>GKC</h2>
                                <p style={{margin:'0', fontSize:'14px', fontWeight:'300'}}>GKC</p>
                            </div>
                            <div style={{width:'50%'}}>
                                <h2>HODL Stacking GGKC</h2>
                                <p style={{fontSize:'18px', color:'yellow', marginBottom:'8px'}}>23%</p>
                                <p style={{fontSize:'12px', color:'#888'}}>
                                    Expected Annualized Rate</p>
                            </div>
                            <div align="center" className="boxRight">
                                <p align style={{fontSize:'14px', color:'yellow', paddingRight:'30px'}}>Processing</p>
                                <button>Detail</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BikiMiningPool; 