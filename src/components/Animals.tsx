import React from 'react';
import { IAnimal } from "../models/IAnimal";
import { Link } from "react-router-dom";
import "./Animals.css"
import { useEffect, useState } from "react";
import placeholderImg from "../img/placeholder.png"

export function Animals(){
  const[animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    let animalsString = JSON.parse(localStorage.getItem('animalsInLS') || '[]');
    setAnimals(animalsString)
    console.log(animalsString);
  }, []);

  let a = animals.map((animal, i) => {
    return(
      <li key={i} className='animalOverview'>
          <img src={ animal.imageUrl } className='imgOverview' onError={(err) => {
            err.currentTarget.src = placeholderImg;
            err.currentTarget.style.verticalAlign = "middle";
          }
          }/>
        <Link to={`/animal/${animal.id}`}><h3 className='animalName'>{ animal.name }</h3></Link>

        <div className='animalInfo'>
          <p className='shortDescription'>{animal.shortDescription}</p>
        </div>
      </li>
    )
  });

  return(
    <>
    <ul>
      { a }
    </ul>
    </>
  )
}

//<p className='shortDescription'>{ animal.shortDescription }</p>