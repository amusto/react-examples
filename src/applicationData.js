import React from 'react';
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
let ApplicationData = _Applications;

export default ApplicationData;