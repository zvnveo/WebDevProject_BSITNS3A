import React from "react";

function PetItem({ image, name, price }) {
  return (
    <div className="PetItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
    </div>
  );
}

export default PetItem;
