import React from "react";

function Info(props) {
  const { infoProp } = props;
  return (
    <div className="img-info">
      <h1>{infoProp.title}</h1>

      <p>{infoProp.copyright}</p>
      <p>{infoProp.explanation}</p>
      <h3>{infoProp.date}</h3>
    </div>
  );
}
export default Info;
