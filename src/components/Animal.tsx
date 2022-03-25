import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBacon } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import "./Animal.css"
import { ShowAnimal } from "./ShowAnimal";

export const Animal = () =>{
  const{ id } = useParams();
  let animalId: number = Number(id);
  const[animal, setAnimal] = useState<IAnimal>(Object);

  let animals = JSON.parse(localStorage.getItem('animalsInLS') || '[]');

  useEffect(() => {
    animals.find((animal: IAnimal) => {
      if(animal.id === animalId){
        setAnimal(animal);
      };
    });
  }, []);

  const setHunger = (fedAnimal: IAnimal) => {
    animals.find((animal: IAnimal) => {
      if(animal.id === fedAnimal.id){
        animal.lastFed = new Date().toISOString();
        animal.isFed = true;
        setAnimal(animal)
      }
      localStorage.setItem('animalsInLS', JSON.stringify(animals))
    });
  }

  return(
    <div className="detailsContainer">
      <ShowAnimal animal={animal} />
      <div className="detailsHungry">
        <p className={`hungerState ${ animal.isFed ? 'full' : 'hungry' }`}>{ animal.isFed ? 'Jag är mätt och belåten!' : 'Jag är hungrig :(' }</p>
        <button onClick={() => setHunger(animal)} disabled={ animal.isFed }> Mata mig <FontAwesomeIcon icon={ faBacon } /></button>
      </div>
    </div>
  )
}
