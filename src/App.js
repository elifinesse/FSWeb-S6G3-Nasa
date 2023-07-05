import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Image from "./Image";
import Video from "./Video";
import Info from "./Info";

function App() {
  const [nasaData, setNasaData] = useState({});
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=7La2DSBifCI4RGuacTKdaSMoTuiPVRIeAbmEFHE3"
      )
      .then((response) => setNasaData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      {nasaData["media_type"] === "image" ? (
        <Image imgProp={nasaData} />
      ) : (
        <Video videoProp={nasaData} />
      )}
      <Info infoProp={nasaData} />
    </div>
  );
}

export default App;
