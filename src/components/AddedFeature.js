import React from 'react';
import { connect } from 'react-redux';
import {removeFeature, updateAddPrice} from '../actions';


const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={()=>{props.removeFeature(props.feature);
      props.updateAddPrice(props.feature.price)}}>X</button>
      {props.feature.name}
    </li>
  );
};

// export default AddedFeature;
export default connect((state) =>{
  return {state};
}, {removeFeature: removeFeature, updateAddPrice:updateAddPrice})(AddedFeature);
