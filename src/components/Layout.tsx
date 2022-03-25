import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import './Layout.css'

export const Layout = () => {
  const[hungryAnimals, setHungryAnimals] = useState<IAnimal[]>([]);

  let animals: IAnimal[] = JSON.parse(localStorage.getItem('animalsInLS') || '[]');

  useEffect(() => {
    let hungry: IAnimal[] = [];
    animals.forEach((animal) => {
      let lastFedCount = new Date().getHours() - new Date(animal.lastFed).getHours();

      if(lastFedCount >= 4){
        hungry.push(animal)
        setHungryAnimals(hungry)
      }
    });
  },[]);

  let hungryList = hungryAnimals.map((animal,i) => {
    return(
    <li key={i}>
      <Link to={`/animals/${animal.id}`}>
        { animal.name }
        </Link>
      </li>
    )
  });

  return(
  <>
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/animals">Animals</Link>
      </nav>
      <div id="dropDown">
          Mata oss!
          <span id="count">{hungryList.length}</span>
          <ul id="hungryList">{hungryList}</ul>
      </div>
    </header>

      <main>
        <Outlet></Outlet>
      </main>

    <footer>Footer</footer>
  </>
  )
}