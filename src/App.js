import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
 //TODO: Refactor to import from ./Components
import Clock from './Components/Clock.js';
import Tabs from './Components/Tabs.js';
import Calculator from './Components/Calculator.js';

let _Applications = [];
let introduction = {
  id: 'appIntro',
  key: 'appIntro',  
  name: 'Introduction',
  content: 'Introduction to my REACT Application. Click on a tab to review a code sample.'
};
_Applications.push(introduction);

/* let loginForm = {
  id: 'appLoginForm',
  name: 'Login Form',
  componentName: 'LoginControl'
};
_Applications.push(loginForm);*/

let boilingTemperature = {
  id: 'appBoiling',
  key: 'appBoiling',  
  name: 'Boiling Temperature',
  component: <Calculator />,
  content: '[ Note: This is cool how we can pass a class function ]'
};
_Applications.push(boilingTemperature);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Clock />
          <h1 className="App-title">REACT Code Samples</h1>
        </header>
        <p className="App-intro">https://github.com/amusto/react-examples</p>
  
        <Grid>
          <Row className="show-grid">
              <Col xs={12} md={8}>
                <Tabs App={Calculator} Applications={_Applications}/>
              </Col>                
              <Col xs={6} md={4}>
                <div><strong>Description</strong></div>
              </Col>                
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
