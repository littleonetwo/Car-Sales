import React from 'react';
import { connect } from 'react-redux';

import { buyItem, updateAddPrice } from '../actions';

const AdditionalFeature = props => {

  // console.log("added feature props:", props);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={()=>{props.buyItem(props.feature);
      props.updateAddPrice(props.feature.price)}}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// export default AdditionalFeature;
export default connect((state) =>{
  return {state};
}, {buyItem: buyItem, updateAddPrice:updateAddPrice} )(AdditionalFeature);
