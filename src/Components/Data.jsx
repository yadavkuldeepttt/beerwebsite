import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Styles/Data.css";
import Card from "./Card";

const Data = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    // data fetching
    const fetchProductData = async () => {
      try {
        const response = await axios.get("https://api.punkapi.com/v2/beers");
        const data = response.data;
        // set data
        console.log(data);
        setApiData(data);
      } catch (err) {
        console.log("Error fetching data" + err);
      }
    };
    fetchProductData();
  }, []);

  return (
    <div className="data-container">
      {apiData.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Data;
