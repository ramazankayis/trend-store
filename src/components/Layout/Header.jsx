/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./Header.css"
import HeaderCartButton from "./HeaderCartButton";
const Header = ({onShowCart}) => {
  return (
    <header className="header">
      <h1> Trend Mağaza</h1>
     <HeaderCartButton onShowCart={onShowCart}/>
    </header>
  );
};

export default Header;
