import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Image from "./Image";
import Video from "./Video";
import Info from "./Info";
import Calendar from "./Calendar";
import styled from "styled-components";

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

  const Content = styled.body`
    background-image: ${nasaData.url};
  `;

  return (
    <Content>
      <div className="App">
        <header>
          <div className="page-title">
            <p>
              ASTRONOMY <br></br>PICTURE <br></br>OF THE DAY
            </p>
            <p>----------</p>
            <p>DISCOVER THE COSMOS</p>
          </div>
          <Calendar dateProp={setDate} />
        </header>
        <div className="content-list">
          <div
            className="content"
            style={{
              backgroundImage: `url(${nasaData.hdurl})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Info infoProp={nasaData} />
          </div>
          <nav className="social-media">
            <ul>Facebook</ul>
            <ul>Twitter</ul>
            <ul>Instagram</ul>
          </nav>
        </div>
      </div>
    </Content>
  );
}

export default App;
