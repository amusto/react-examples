import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
 //TODO: Refactor to import from ./Components
import Clock from './Components/Clock.js';
import Tabs from './Components/Tabs.js';
import Calculator from './Components/Calculator.js';
import FilterableProductTable from './Components/ProductSearch.js';

let _Applications = [];
let introduction = {
  id: 'appIntro',
  key: 'appIntro',  
  name: 'Introduction',
  content: 'Introduction to my REACT Application. Click on a tab to review a code sample.'
};
_Applications.push(introduction);

let productSearch = {
  id: 'appProduct',
  key: 'appProduct',  
  name: 'Product Search',
  component: <FilterableProductTable />,
  content: 'Product Search Application.'
};
_Applications.push(productSearch);

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
                <Tabs Applications={_Applications} defaultActiveKey={defaultActiveKey}/>
              </Col>                
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
