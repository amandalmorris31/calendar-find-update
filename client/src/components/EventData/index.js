import React from "react";
import Date from "../Date";
import EventDetails from "../EventDetails";
import ResponseBtns from "../ResponseBtns";
import "./style.css";

function EventData({ start, end, title, description, location, id }) {
  function confirmEvent(){
    console.log("confirming event");
    //post to server with event and user id. user id might be on server in cookie
  }
  return (
    <div className="row">
      <Date start={start} end={end} />
      <EventDetails
        title={title}
        start={start}
        end={end}
        description={description}
        location={location}
        id={id}

      />
      <ResponseBtns
      //give ResponseBtns controller the following stuff.  Passing prop
      doConfirm={confirmEvent}
      />
    </div>
  );
}
export default EventData;
