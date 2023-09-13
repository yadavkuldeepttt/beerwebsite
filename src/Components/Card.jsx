// Card.js
import React, { useState } from "react";

import "./Styles/Card.css";
import Modal from "./Modal";

const Card = ({ data }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="card" onClick={() => setModalShow(true)}>
      <img src={data.image_url} alt="" className="card-image" />
      <div className="card-body">
        <h1 className="card-title">{data.name}</h1>
        <h4 className="card-tagline">{data.tagline}</h4>
      </div>

      <Modal show={modalShow} onHide={() => setModalShow(false)} data={data} />
    </div>
  );
};

export default Card;
