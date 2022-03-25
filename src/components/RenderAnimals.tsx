import { IAnimalProps } from "../models/IAnimalProps";
import placeholderImg from "../img/placeholder.png"
import "./RenderAnimals.css"
import "./Animals.css"

export const RenderAnimals = (props: IAnimalProps, index:number) => {
  return(
    <>
      <img src={ props.animal.imageUrl } className='overviewImg' onError={
        (err) => { err.currentTarget.src = placeholderImg} }/>
      <h3 className='overviewName'>{ props.animal.name }</h3>
      <div className='overviewInfo'>
        <p className='overviewDescription'>{ props.animal.shortDescription }</p>
      </div>
    </>
  )
}