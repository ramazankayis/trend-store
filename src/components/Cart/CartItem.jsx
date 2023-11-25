/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import "./CartItem.css";
import { CartContext } from "../../context/CartProvider";

const CartItem = (props) => {
  const { removeItem } = useContext(CartContext);
  return (
    <li className="cart-item">
      <div className="cart-item-img">
        <img src={props.product.img} alt={props.product.name} />
      </div>
      <div className="cart-item-info">
        <div className="cart-item-texts">
          <b>{props.product.name}</b>
          <div>
            <span>₺{props.product.price} x </span>
            <span className="cart-item-amount">{props.product.amount}</span>
          </div>
        </div>

        <a
          href="/"
          className="cart-item-remove"
          onClick={(e) => {
            e.preventDefault();
            removeItem(props.product.id);
          }}
        >
          x
        </a>
      </div>
    </li>
  );
};

export default CartItem;
