/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { Fragment } from "react";
import "./Offcanvas.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.hideCartHandler} />;
};
const OffcanvasOverlay = (props) => {
  return (
    <div className="offcanvas">
      <div className="content">{props.children}</div>
    </div>
  );
};
const Offcanvas = (props) => {
  const portalElement = document.getElementById("overlays");

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop hideCartHandler={props.hideCartHandler} />,
        portalElement
      )}

      {ReactDOM.createPortal(
        <OffcanvasOverlay>{props.children}</OffcanvasOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Offcanvas;
