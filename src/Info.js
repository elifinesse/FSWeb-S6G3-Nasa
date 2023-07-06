import React from "react";

function Info(props) {
  const { infoProp } = props;
  return (
    <div className="img-info">
      <h1>{infoProp.title}</h1>
      <h3>Credit: {infoProp.copyright}</h3>
      <p>{infoProp.explanation}</p>
      <h3>Date: {infoProp.date}</h3>
    </div>
  );
}
export default Info;
