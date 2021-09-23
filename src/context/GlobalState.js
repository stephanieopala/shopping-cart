import { createContext, useReducer } from "react";
import rootReducer from "../reducer/RootReducer";
//create context
export const GlobalContext = createContext();

//state
const initialState = {
  products: [
    {
      id: 1,
      title: "Product One",
      description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.",
    },
    {
      id: 2,
      title: "Product Two",
      description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.",
    }
  ],
  cart: []
}

const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(rootReducer, initialState)

  //functions/dispatch etc
  const addProduct = (product) => {
    dispatch({type: "ADD_PROD", payload: product})
  }

  const removeProduct = (id) => {
    dispatch({type: "REMOVE_PROD", payload: id})
  }

  return (
    <GlobalContext.Provider value={{
      products: state.products,
      cart: state.cart,
      addProduct,
      removeProduct
    }}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider;