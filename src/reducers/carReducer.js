export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
}


export const carReducer = (state = initialState, action) =>{

  switch (action.type) {
    case "BUY_ITEM":
      // console.log("buy info:", state)
      // console.log("action info:", action)
      if(state.car.features.find(item=> item.id === action.payload.id)){
        return state;
      } else {
        const newFeature={
          id: action.payload.id, name:action.payload.name, price: action.payload.price
        }
        return {...state, car:{...state.car, features:[...state.car.features, newFeature]}};
      }
    case "REMOVE_FEATURE":
      return {
        ...state, car:{...state.car, features: state.car.features.filter(item=> {
          return item.id !== action.payload.id;
        })}
      }
    case "UPDATE_ADD_PRICE":
      const newPrice = state.car.features.reduce((total, price) =>{
          return total += price.price;
      }, 0 );


      // console.log("total:", newPrice);
      return{...state, additionalPrice:newPrice}
      return state;
    default:
      return state;

  }


}
