import React, {Component} from 'react';
import SideBar from './SideBar.js';
import BoardTrading from './BoardTrading.js';
import AboutApp from './AboutApp.js';
import Invest from './Invest.js';


class App extends Component {
    render(){
      return(
        <div className="Header">
          <SideBar />
          <BoardTrading />
          <AboutApp />
          <Invest />
        </div>
      )
    }
}
export default App;