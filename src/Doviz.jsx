import React, { useEffect, useState } from "react";

import axios from "axios";
import "./Doviz.css";
const Doviz = () => {
  const [usd, setUsd] = useState([]);
  const [eur, setEur] = useState([]);
  const [btc, setBtc] = useState([]);
  useEffect(() => {
    const getDoviz = async () => {
      const url = "https://api.genelpara.com/embed/doviz.json";

      try {
        const result = await axios.get(url);

        if (result.data) {
          console.log(result.data);
          setUsd(result.data.USD.alis);
          setEur(result.data.EUR.alis);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getDoviz();
  }, []);

  useEffect(() => {
    const kripto = async () => {
      const url = "https://api.genelpara.com/embed/kripto.json";

      try {
        const result = await axios.get(url);

        if (result.data) {
          setBtc(result.data.BTC.satis);
        }
      } catch (error) {
        console.log(error);
      }
    };
    kripto();
  });

  return (
    <div style={{ marginTop: "150px" }} className="cards">
      <div style={{ backgroundColor: "#ffc93c" }} className="card">
        <h3 style={{ fontSize: "25px" }}>
          {usd ? usd : <i class="fas fa-spinner"></i>}
        </h3>
        <p>Dolar</p>
      </div>
      <div style={{ backgroundColor: "#31326f" }} className="card">
        <h3 style={{ fontSize: "25px" }}>
          {eur ? eur : <i class="fas fa-spinner"></i>}
        </h3>
        <p>Euro</p>
      </div>
      <div style={{ backgroundColor: "#9ddfd3" }} className="card">
        <h3 style={{ fontSize: "25px" }}>
          {btc ? btc : <i class="fas fa-spinner"></i>}
        </h3>
        <p>Bitcoin</p>
      </div>
    </div>

  
  );
};

export default Doviz;
