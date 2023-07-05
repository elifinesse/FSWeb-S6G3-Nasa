import React from "react";

function Info(props) {
  const { infoProp } = props;
  return (
    <div className="img-info">
      <h1>{infoProp.title}</h1>
      <h3>{infoProp.date}</h3>
      <h4>{infoProp.copyright}</h4>
      <p>{infoProp.explanation}</p>
    </div>
  );
}
export default Info;
