import React from "react";

function Image(props) {
  const { imgProp } = props;
  return (
    <div className="nasa-img">
      <img src={imgProp.url} alt={imgProp.title} />
    </div>
  );
}
export default Image;
