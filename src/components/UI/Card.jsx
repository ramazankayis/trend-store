/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import "./Card.css";
const Card = (props) => {
  return <li className="card">{props.children}</li>;
};

export default Card;
