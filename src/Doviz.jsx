import React, { useEffect,useState } from "react";

import axios from "axios";

const Doviz = () => {

const [usd,setUsd]=useState([]);

    useEffect(() => {
        const getDoviz = async () => {
          const url =
            "https://api.genelpara.com/embed/doviz.json";
    
          try {
            const result = await axios.get(url);
    
            if (result.data) {
            console.log(result.data)
            setUsd(result.data.USD.alis)
            }
          } catch (error) {
            console.log(error);
          }
        };
    
        getDoviz();
      }, []);

  return (
    <div>
      <h1> Usd:{usd?usd:<h1>yükleniyor</h1>},</h1>
    </div>
  );
};

export default Doviz;
