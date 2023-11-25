/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import "./Cart.css";
import CartItem from "./CartItem";
import Offcanvas from "../UI/Offcanvas";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
const Cart = ({ hideCartHandler }) => {
  const { items, totalAmount, clearItem } = useContext(CartContext);
  const hasItems = items.length > 0;
  console.log("items2222222222", items);
  const cartItems = (
    <ul className="cart-items">
      {items.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  );
  return (
    <Offcanvas hideCartHandler={hideCartHandler}>
      <div className="cart-head">
        <h2>Sepetim</h2>
        <a href="/" className="cart-close" onClick={hideCartHandler}>
          X
        </a>
      </div>
      {cartItems}
      <div className="total">
        <span>Toplam Değer</span>
        <span>{totalAmount?.toFixed(2)} ₺</span>
      </div>
      {hasItems && (
        <div className="actions">
          <button className="cart-order">Sipariş Ver</button>
          <button className="cart-clear" onClick={clearItem}>
            Temizle
          </button>
        </div>
      )}
    </Offcanvas>
  );
};

export default Cart;
