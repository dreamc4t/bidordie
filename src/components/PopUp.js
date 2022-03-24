import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa"

const PopUp = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}><FaAngleDoubleDown /></span>
        {props.content}
      </div>
    </div>
  );
};

export default PopUp;