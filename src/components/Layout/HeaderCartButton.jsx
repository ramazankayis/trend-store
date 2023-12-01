/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";
import { CartContext } from "../../context/CartProvider";
// eslint-disable-next-line no-unused-vars
const HeaderCartButton = ({ onShowCart }) => {
  const cartCtx = useContext(CartContext);

  const totalItemsInCart = cartCtx.items.reduce((acc, currentItem) => {
    return acc + currentItem.amount;
  }, 0);

  return (
    <button className="button" onClick={onShowCart}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Sepetim</span>
      <span className="badge">{totalItemsInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
