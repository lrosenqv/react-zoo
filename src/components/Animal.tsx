import { Link, useParams } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import "./Animal.css"

export const Animal = () => {
  const{ id } = useParams();
  let animalId: number = Number(id)

  let animals = JSON.parse(localStorage.getItem('animalsInLS') || '[]')

  let animal: IAnimal = animals.find((a: IAnimal) => {
    return a.id === animalId
  });

  return(
    <>
    <Link to={'/animals'} className="button">Backa</Link>
    <div className="animalDetails">
      <h2>{ animal.name }</h2>
      <p>{ animal.longDescription }</p>

      <section>
        <img src={ animal.imageUrl } className="animalDetailsImg"/>
        <ul>
          <li>Latin name: { animal.latinName }</li>
          <li>Medicines: { animal.medicine }</li>
          <li>Last fed: { animal.lastFed }</li>
        </ul>
        <button>Mata</button>
      </section>
    </div>
  </>
  )
}