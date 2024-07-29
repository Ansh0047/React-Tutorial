import { createContext, useState, useReducer} from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";

// created a context with a default value
export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

// this reducer function is always defined outside the component function 
// state - in this we got the latest state snapshot managed by the useReducer which is similar to the prevSate in useState 
function shoppingCartReducer(state,action){
  // so here we will be returning the updated state

  // so based on the action type we are defining down in the dispatch function we will use that action here and similar to the useSate 
  // updating function just putting the logic down here
  if(action.type === 'ADD_ITEM'){
    const updatedItems = [...state.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
        updatedItems.push({
          id: action.payload,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        items: updatedItems,
      };
  }

  if(action.type === 'UPDATE_ITEM'){
    const updatedItems = [...state.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += action.payload.amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
  }
  return state;
}

// so here we have outsourced the state and context from the app.jsx to this file where we are returns the wrapper 
// to the app.jsx file in which is further used as a component and we can pass the data as props.
export default function CartContextProvider({children}) {
  // useReducer hook => {state,diapatch fucntion}
  const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCartReducer,{
    items: [],
  });

  // useState hook
  // const [shoppingCart, setShoppingCart] = useState({
  //   items: [],
  // });

  function handleAddItemToCart(id) {
    // this type and the payload are passed to the action of the reducer function
    shoppingCartDispatch({
      type: 'ADD_ITEM',
      payload: id,
    });
    
    /*
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        items: updatedItems,
      };
    });
    */
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: 'UPDATE_ITEM',
      // productId: productId,
      // amount: amount,
      // we can pass the stand alone values and also using the payload using nested structure
      payload: {
        productId: productId,
        amount: amount,
      }
    });

    /*
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    });
    */
  }

  // we will be passing this as a value to the context object and any child component which is wrapped by the
  // Context provider can access these properties
  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  // this is the wrapper component and all the components inside it can use the context 
  return <CartContext.Provider value={ctxValue}>
    {children}
  </CartContext.Provider>
}
