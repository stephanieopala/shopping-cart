import { createContext, useReducer } from "react";
import rootReducer from "../reducer/RootReducer";
//create context
export const GlobalContext = createContext();

//state
const initialState = {
  products: [
    {
      id: 1,
      title: "Chocolate Cookies",
      description: "6 pieces of cookies",
      price: "$5",
      image: "https://images.unsplash.com/photo-1475856033578-76b4a228f5c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"
    },
    {
      id: 2,
      title: "Red Velvet Cake",
      price: "$10",
      description: "A slice of cake",
      image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=651&q=80"
    },
    {
      id: 3,
      title: "Cup Cakes",
      price: "$2",
      description: "One cup cake",
      image: "https://images.unsplash.com/photo-1582760998343-042b34030a29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
      id: 4,
      title: "Macarons",
      price: "$5",
      description: "6 pieces of macarons",
      image: "https://images.unsplash.com/photo-1599599377756-6c2a54da71d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=577&q=80"
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