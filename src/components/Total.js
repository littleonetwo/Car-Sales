import React from 'react';
import { connect } from 'react-redux';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};


// export default Total;
export default connect((state) =>{
  return {car:state.car, additionalPrice:state.additionalPrice};
})(Total);
