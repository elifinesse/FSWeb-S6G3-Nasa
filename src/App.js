import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Image from "./Image";
import Video from "./Video";
import Info from "./Info";
import Calendar from "./Calendar";

function App() {
  const [nasaData, setNasaData] = useState({});
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=7La2DSBifCI4RGuacTKdaSMoTuiPVRIeAbmEFHE3",
        {
          params: {
            date: date,
          },
        }
      )
      .then((response) => setNasaData(response.data))
      .catch((error) => console.log(error));
  }, [date]);

  return (
    <div className="App">
      <Calendar dateProp={setDate} />
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
