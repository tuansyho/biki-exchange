import React, {Component} from 'react';
import './App.css';
import Header from './Component/Header.js';
import Footer from './Component/Footer.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import Exchange from './pages/Exchange/Sidebar.js';
import Fiat from './pages/Fiat/Fiat.js';
import Margin from './pages/Margin/Margin.js';
import Contract from './pages/Contract/Contract.js';
import EFT from './pages/EFT/EFT.js';
import FastLoan from './pages/FastLoan/FastLoan.js';
import BikiMiningPool from './pages/BikiMiningPool/BikiMiningPool.js';
import BikiPower from './pages/BikiPower/BikiPower.js';
import AppDownload from './pages/AppDownload/AppDownload.js';
import Login from './pages/Login/Login.js';
import SignUp from './pages/SignUp/SignUp.js';


class App extends Component {
    render(){
      return(
            <Router>
              <div className="Header">
                <Header />
                  <Route path="/" exact component={Home}/>
                  <Route path="/exchange" exact component={Exchange}/>
                  <Route path="/fiat" exact component={Fiat}/>
                  <Route path="/contract" exact component={Contract}/>
                  <Route path="/leverage" exact component={Margin}/>
                  <Route path="/etf" exact component={EFT}/>
                  <Route path="/fastloan" exact component={FastLoan}/>
                  <Route path="/bikiminingpool" exact component={BikiMiningPool}/>
                  <Route path="/bikiPower" exact component={BikiPower}/>
                  <Route path="/appDownload" exact component={AppDownload}/>
                  <Route path="/login" exact component={Login}/>
                  <Route path="/signUp" exact component={SignUp}/>
                <Footer />
              </div>
            </Router>
      )
    }
}
export default App;
