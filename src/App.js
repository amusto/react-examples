import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import ApplicationData from './applicationData.js';
 
//TODO: Refactor to import from ./Components
import Clock from './Components/Clock.js';
import Tabs from './Components/Tabs.js';

class App extends Component {
  render() {
    const defaultActiveKey = 1;    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Clock />
          <h1 className="App-title"><a href="https://github.com/amusto/react-examples">https://github.com/amusto/react-examples</a></h1>
        </header>
        <Grid>
          <Row className="show-grid main-container">
              <Col xs={12} md={12}>
                <Tabs Applications={ApplicationData} defaultActiveKey={defaultActiveKey}/>
              </Col>                
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
