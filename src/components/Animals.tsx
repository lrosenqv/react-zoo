import React from 'react';
import { IAnimal } from "../models/IAnimal";
import { Link, Outlet } from "react-router-dom";
import "./Animals.css"
import { useEffect, useState } from "react";

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
          <img src={ animal.imageUrl } className='imgOverview'/>
        <Link to={`/animal/${animal.id}`}><h3 className='animalName'>{ animal.name }</h3></Link>
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