/* eslint-disable no-case-declarations */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { createContext, useReducer } from "react";

export const CartContext = createContext();

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      let updatedItems = [...state.items];

      if (existingCartItemIndex !== -1) {
        updatedItems[existingCartItemIndex] = {
          ...state.items[existingCartItemIndex],
          amount:
            state.items[existingCartItemIndex].amount + action.item.amount,
        };
      } else {
        updatedItems = [...state.items, action.item];
      }

      return {
        items: updatedItems,
        totalAmount: state.totalAmount + action.item.price * action.item.amount,
      };
    case "REMOVE":
      const existingItems = state.items.filter((item) => item.id !== action.id);
      const itemRemove = state.items.find((item) => item.id === action.id);
      return {
        items: existingItems,
        totalAmount: state.totalAmount - itemRemove.price * itemRemove.amount,
      };
    case "CLEAR":
      return {
        items: [],
        totalAmount: 0,
      };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cartstate, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const cartContext = {
    items: cartstate.items,
    totalAmount: cartstate.totalAmount,
    addItem: (item) => {
      dispatchCartAction({ type: "ADD", item });
    },
    removeItem: (id) => {
      dispatchCartAction({ type: "REMOVE", id });
    },
    clearItem: () => {
      dispatchCartAction({ type: "CLEAR" });
    },
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
export default CartProvider;
