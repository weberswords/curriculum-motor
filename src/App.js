import React, { Component } from 'react';
import './App.css';
import Nav from './Structure/Nav.js';
import CenterPane from './Structure/CenterPane.js';
import RightPane from './Structure/RightPane.js';

class App extends Component {

    render() {
    return (
          <div className="App">
             <Nav/>
             <CenterPane/>
             <RightPane/>
          </div>                
    );
  }
}

export default App;