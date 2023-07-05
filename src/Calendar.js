import React from "react";

function Calendar() {
  return (
    <div className="calendar-div">
      <form action="/action_page.php">
        <label for="date">Date</label>
        <input type="date" id="date" name="date" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Calendar;
