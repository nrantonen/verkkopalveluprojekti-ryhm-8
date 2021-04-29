import React from "react";
 
const Popup = props => {
  return (
    <div className="popup-box, ZIndex">
      <div className="box">
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;