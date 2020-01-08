import React, { useReducer } from 'react';
import { connect } from 'react-redux';


import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import {carReducer, initialState} from './reducers/carReducer.js';






const App = (props) => {

  // console.log("initialState:", props);
  // const removeFeature = item => {
  //   // dispatch an action here to remove an item
  // };

  // const buyItem = item => {
  //   // dipsatch an action here to add an item
  // };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total />
      </div>
    </div>
  );
};

export default connect((state) =>{
  return {state};
})(App);
