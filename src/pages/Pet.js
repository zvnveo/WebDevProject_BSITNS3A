import React from "react";
import { Link } from "react-router-dom";
import { PetList } from "../Helpers/PetList";
import PetItem from "../components/PetItem";
import "../styles/Pet.css";

function Pet() {
  return (
    <div className="pet">
      <h1 className="petTitle">Our Cats</h1>
      <div className="petList">
        {PetList.map((petItem, key) => (
          <PetItem
            key={key}
            image={petItem.image}
            name={petItem.name}
            description={petItem.description}
            button={
              <Link to="/contact" className="contact-link">
                {petItem.button}
              </Link>
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Pet;
