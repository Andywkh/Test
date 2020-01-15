import React, {Component} from 'react';
import './App.css';
import Clock from './components/Clock';
import Application1 from './components/Application1';
import Application2 from './components/Application2';

let time = new Date().toLocaleString();

class App extends Component {
  render() {
    prompt ('Hi NodeFlair, this will be my combined web-app') ;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to my 2-in-1 Web App -from local render</h2>
        </div>
        <p className="App-intro">
           {this.props.name}!
        </p>
        <Clock></Clock>
        <Application1></Application1>
        <Application2></Application2>
      </div>
    );
  }
}


export default App;