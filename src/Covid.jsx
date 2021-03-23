import React, { useState, useEffect } from "react";

import axios from "axios";
import moment from "moment";

import "moment/locale/tr";


import Doviz from './Doviz'

moment.locale("tr");

function App() {
  const [bilgi, setBilgi] = useState("");
  const [ölüm, setÖlüm] = useState("");
  const [enfekte, setEnfekte] = useState("");
  const [recovered, Setrecovered] = useState("");
  const [data, setData] = useState("");
  const [günlükenfekte, setGünlükenfekte] = useState("");
  const [günlükölü, setGünlükölü] = useState("");
  const [günlükurtalı, setGünlükurtalı] = useState("");
  useEffect(() => {
    const getData = async () => {
      const url =
        "https://api.apify.com/v2/key-value-stores/28ljlt47S5XEd1qIi/records/LATEST?disableRedirect=true";

      try {
        const result = await axios.get(url);

        if (result.data) {
          setBilgi(result);
          setÖlüm(result);
          setEnfekte(result);
          Setrecovered(result);
          setGünlükenfekte(result);
          setGünlükölü(result.data.dailyDeceased);
          setGünlükurtalı(result.data.dailyRecovered);
          setData(result.data.lastUpdatedAtSource);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <h2> En son günceleme {moment().format("MMMM Do YYYY, h:mm:ss ")} </h2>

      <div>
        <p>
          Türkiye toplam enfekte kişi sayısı :{" "}
          {enfekte ? enfekte.data.infected : <h1>Yükleniyor</h1>}
        </p>

        <p>
          Türikye Toplam Ölü kişi sayısı :{" "}
          {ölüm ? ölüm.data.deceased : <h1>Yükleniyor</h1>}
        </p>
        <p>
          Türkiye kurtarılan toplam kişi:
          {recovered ? recovered.data.recovered : <h1>Yükleniyor</h1>}
        </p>
        <p>
          Türkiye günlük enfekte kişi sayısı :
          {günlükenfekte ? (
            günlükenfekte.data.dailyInfected
          ) : (
            <h1>Yükleniyor</h1>
          )}
        </p>
        <p>
          Günlük ölü kişi sayısı:
          {günlükölü ? günlükölü : <h1>Yükleniyor</h1>}
        </p>
        <p>
          {" "}
          Günlük kurtarılan kişi::
          {günlükurtalı ? günlükurtalı : <h1>Yükleniyor</h1>}
        </p>
      </div>


</div>

  );
}
export default App;
