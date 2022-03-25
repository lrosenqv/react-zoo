import { IAnimalProps } from "../models/IAnimalProps";
import { Link } from "react-router-dom";
import placeholderImg from "../img/placeholder.png"
import "./ShowAnimal.css"

export const ShowAnimal = ({animal}:IAnimalProps) => {
  return(
    <>
    <Link to={'/animals'} className="button">Backa</Link>
      <section id="detailsAboutAnimal">
        <h2>{ animal.name }</h2>
        <img src={ animal.imageUrl } className="detailsImg" onError={(err) => { err.currentTarget.src = placeholderImg }}/>
        <p id="detailsShortInfo">
          <span>Född: </span> { animal.yearOfBirth }<br/>
          <span>Läkemedel:</span> { animal.medicine }<br/>
          { animal.shortDescription }
        </p>
      </section>

      <aside id="detailsFacts">
        <h3>{ animal.latinName }</h3>
        <p id="detailsLongInfo">{ animal.longDescription }</p>
      </aside>
  </>
  )
}