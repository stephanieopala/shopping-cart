function rootReducer(state, action) {
  switch (action.type) {
    case "ADD_PROD":
      return {...state,
        cart: [...state.cart, action.payload]
      };
    case "REMOVE_PROD":
      return {...state,
        cart: [state.cart.filter(product => product.id !== action.payload)] 
      };
    default:
      return state;
  }
}

export default rootReducer;
