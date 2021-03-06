import React from "react";
import "./style.css";

function ResponseBtns(props) {
  
  return (
    <div className="col-2">
      <div className="has-text-centered">
        {/* doConfirm exists on props object */}
        <button className="button is-large mb-2 mb-md-0 accept" onClick={()=> props.doConfirm(props.eventId)}>
          <i className="far fa-calendar-check"></i>
        </button>
        <br />
        <button className="button is-large decline">
          <i className="far fa-calendar-times"></i>
        </button>
      </div>
    </div>
  );
}
export default ResponseBtns;
