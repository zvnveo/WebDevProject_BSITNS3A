import React from "react";
import { PetList } from "../helpers/PetList";
import PetItem from "../components/PetItem";
import "../styles/Pet.css";

function Pet() {
  const handleButtonClick = (button) => {
    console.log(`Button clicked for ${button}`);
  };

  return (
    <div className="pet">
      <h1 className="petTitle">Our Menu</h1>
      <div className="petList">
        {PetList.map((petItem, key) => {
          return (
            <PetItem
              key={key}
              image={petItem.image}
              name={petItem.name}
              button={petItem.button}
              onClick={() => handleButtonClick(petItem.button)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Pet;
