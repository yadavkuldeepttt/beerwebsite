import React from "react";
import "./Styles/ModalBody.css";

const ModalBody = ({ data }) => {
  return (
    <div>
      <div className="modal-body">
        <div className="modalleft">
          <img src={data.image_url} alt="" />
        </div>
        <div className="modalright">
          <div className="description">
            <h3>{data.name}</h3>
            <p>{data.description}</p>
          </div>

          <div className="alcohol-quantity">
            <h4>Alcohol Content(ABV)</h4>
            <p>{data.abv}% ABV</p>
          </div>
          <div className="brewers_tips">
            <h4>Precaution</h4>
            <p>{data.brewers_tips}</p>
          </div>
          <div className="ingredients">
            <h4>Ingredients</h4>
            <ul>
              {data.ingredients.hops.map((hop, index) => (
                <li key={index}>{hop.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default ModalBody;
