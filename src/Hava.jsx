import React, { useEffect, useState } from "react";
import axios from "axios";

import Data from "./config/deneme.json";
import "./hava.css";
const Doviz = () => {
  const [sehir, setShir] = useState("");
  const [icon, setİcon] = useState("");
  const [derece, setDerece] = useState("");
  useEffect(() => {
    const getDoviz = async () => {
      const url =
        "http://api.weatherapi.com/v1/current.json?key=731afeb06b094b9cb10123222212303&q=Manavgat&aqi=no";

      try {
        const result = await axios.get(url);

        if (result.data) {
          console.log(result.data);
          setShir(result.data.location.name);
          setİcon(result.data.current.condition.icon);
          setDerece(result.data.current.temp_c);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getDoviz();
  }, []);

  return (
    <div style={{ marginTop: "150px" }} className="cards_1">
      <div style={{ backgroundColor: "#301b3f" }} className="card_1">
        <p style={{ color: "white" }}>{sehir}</p>

        <h3 style={{ fontSize: "25px" }}>Derece:{derece}</h3>
      </div>
      <img style={{ marginLeft: "-100px" }} src={icon} />
    </div>
  );
};

export default Doviz;
