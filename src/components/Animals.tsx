import React from 'react';
import { IAnimal } from "../models/IAnimal";
import { Link } from "react-router-dom";
import "./Animals.css"
import "./RenderAnimals.css"
import { useEffect, useState } from "react";
import { RenderAnimals } from './RenderAnimals';

export const Animals = () => {
  const[animals, setAnimals] = useState<IAnimal[]>([]);
  const[hungryAnimals, setHungryAnimals] = useState<IAnimal[]>();


  useEffect(() => {
    let animalsString = JSON.parse(localStorage.getItem('animalsInLS') || '[]');
    setAnimals(animalsString)
  }, []);

  useEffect(() => {
    animals.map((animal) => {
      let lastFedCount = new Date().getHours() - new Date(animal.lastFed).getHours();
      if(lastFedCount >= 3) {
        animal.isFed = false;
      }
      localStorage.setItem('animalsInLS', JSON.stringify(animals));
    });
  });

  let animalItem = animals.map((animal, i) => {
    return(
      <li key={i} className='overviewAnimal' >
        <Link to={`/animals/${animal.id}`}>
          <RenderAnimals animal={animal} />
        </Link>
      </li>
    )
  });

  return(
      <ul>{ animalItem }</ul>
  )
}
