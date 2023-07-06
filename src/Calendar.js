import React from "react";

function Calendar(props) {
  const { dateProp } = props;

  function dateHandler(event) {
    dateProp(event.target.value);
  }

  return (
    <div className="calendar-div">
      <input type="date" id="date" name="date" onChange={dateHandler} />
    </div>
  );
}

export default Calendar;
