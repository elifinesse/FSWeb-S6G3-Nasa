import React from "react";

function Video(props) {
  const { videoProp } = props;
  return (
    <iframe
      src={videoProp.url}
      width="640"
      height="360"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
}

export default Video;
