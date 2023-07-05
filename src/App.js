import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

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
      <div className="nasa-img">
        <h1>{nasaData.title}</h1>
        <img src={nasaData.hdurl} alt="Günün fotoğrafı" />
      </div>
      <div className="img-info">
        {" "}
        <h3>{nasaData.date}</h3>
        <h4>{nasaData.copyright}</h4>
        <p>
          <span role="img" aria-label="go!">
            🚀🚀🚀🚀🚀
            <br></br>
            <br></br>
          </span>

          {nasaData.explanation}
        </p>
      </div>
    </div>
  );
}

export default App;
