import React from "react";

function UCards({ item: { id, cover, name, time } }) {
  return (
    <div>
      <div className="movieBox">
        <div className="img">
          <img src={cover} alt="" />
        </div>
        <div className="text">
          <h3>{name}</h3>
          <span>{time}</span>
          <button className="primary-btn">
            <i className="fas fa-play">
              <span>PLAY NOW</span>
            </i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UCards;
