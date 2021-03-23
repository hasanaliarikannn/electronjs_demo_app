import React, { useState, useEffect } from "react";

import axios from "axios";
import moment from "moment";
import { BiLoaderCircle } from "react-icons";
import "moment/locale/tr";

import Doviz from "./Doviz";

moment.locale("tr");

function App() {
  const [günlükenfekte, setGünlükenfekte] = useState("");
  const [günlükölü, setGünlükölü] = useState("");
  const [günlükurtalı, setGünlükurtalı] = useState("");
  const [data, setData] = useState("");
  useEffect(() => {
    const getData = async () => {
      const url = "https://api.genelpara.com/embed/korona.json";

      try {
        const result = await axios.get(url);

        if (result.data) {
          setData(result.data.korona.tarih);
          setGünlükenfekte(result.data.korona.gunluk_vaka);
          setGünlükölü(result.data.korona.gunluk_vefat);

          setGünlükurtalı(result.data.korona.gunluk_iyilesen);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <div className="cards">
      <div  className="card">
        <h3 style={{ fontSize: "25px" }}>
          {günlükenfekte ? günlükenfekte : <i class="fas fa-spinner"></i>}
        </h3>
        <p>Günlük Vaka sayısı</p>
      </div>
      <div style={{ backgroundColor: "#e84545" }} className="card">
        <h3 style={{ fontSize: "25px" }}>
          {günlükölü ? günlükölü : <i class="fas fa-spinner"></i>}
        </h3>
        <p>Günlük Ölüm Sayısı</p>
      </div>
      <div style={{ backgroundColor: "#c06014" }} className="card">
        <h3 style={{ fontSize: "25px" }}>
          {günlükurtalı ? günlükurtalı : <i class="fas fa-spinner"></i>}
        </h3>
        <p>Günlük İyleşen Sayısı</p>
      </div>
    </div>
  );
}
export default App;
