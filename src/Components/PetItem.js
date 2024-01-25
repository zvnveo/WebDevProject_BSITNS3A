import React from "react";

function PetItem({ image, name, description, button }) {
  return (
    <div className="petItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p>{description}</p>
      <button> {button} </button>
    </div>
  );
}

export default PetItem;
