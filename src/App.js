import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
//import PageTemplate from './PageTemplate.js';
import Tabs from './Tabs.js';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  // Lifecycle hooks
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );    
  }
    
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>{this.state.date.toLocaleTimeString()}</div>
    );
  }
}

class App extends Component {
  /*constructor(props) {
    super(props);
  }*/

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Clock />
          <h1 className="App-title">Welcome to my React Application</h1>
        </header>
        <p className="App-intro"></p>
  
        <Grid>
          <Row className="show-grid">
              <Col xs={12} md={8}>
                <Tabs />
              </Col>                
              <Col xs={6} md={4}>
                <span><strong>Page details</strong></span>
              </Col>                
          </Row>
        </Grid>

      </div>
    );
  }
}

export default App;
