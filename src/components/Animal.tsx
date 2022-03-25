import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBacon } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import "./Animal.css"
import placeholderImg from "../img/placeholder.png"

export const Animal = () => {
  const{ id } = useParams();
  let animalId: number = Number(id);
  const[animal, setAnimal] = useState<IAnimal>(Object);
  const [isHungry, setIsHungry] = useState<boolean>(false);
  const[feedTime, setFeedTime] = useState<string>("");;

  let animals = JSON.parse(localStorage.getItem('animalsInLS') || '[]')

  useEffect(() => {
    animals.find((anim: IAnimal) => {
      if(anim.id === animalId){
        let lastFedTime = new Date().getTime() - new Date(anim.lastFed).getTime();
        let lastFedCount = Math.floor(lastFedTime / (1000 * 60 * 60));

        if(lastFedCount >= 3) {
          setIsHungry(true)
          anim.isFed = false;
        }
        setAnimal(anim);
        setFeedTime(new Date(anim.lastFed).toLocaleString());
      };
    });
  }, []);

  function feedAnimal(fedAnimal: IAnimal){
    let newFedTime = new Date();
    setFeedTime(newFedTime.toLocaleString());
    setIsHungry(false)

    animals.find((animal: IAnimal) => {
      if(animal.id === fedAnimal.id){
        animal.lastFed = newFedTime.toJSON();
      }
      localStorage.setItem('animalsInLS', JSON.stringify(animals))
    });
  }

  return(
    <>
    <Link to={'/animals'} className="button">Backa</Link>
    <div className="animalDetails">
      <h2>{ animal.name }</h2>
      <p id="longDescription">{ animal.longDescription }</p>

      <section>
        <img src={ animal.imageUrl } className="animalDetailsImg"onError={
            (err) => {
              err.currentTarget.src = placeholderImg;
            }
          }/>
        <ul id="animalFacts">
          <li>Födelseår: { animal.yearOfBirth }</li>
          <li>Latinskt namn: { animal.latinName }</li>
          <li>Mediciner: { animal.medicine }</li>
          <li>Senast matad: { feedTime }</li>
          <li className={`hungerState ${isHungry ? 'hungry' : 'full'} `}>{isHungry ? 'Jag är hungrig :(' : 'Jag är mätt och belåten!' }</li>
        </ul>
        <button onClick={() => feedAnimal(animal)} disabled={ !isHungry }> Mata mig <FontAwesomeIcon icon={ faBacon } /></button>
      </section>
    </div>
  </>
  )
}