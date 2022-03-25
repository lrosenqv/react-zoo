import axios from "axios";
import { useEffect } from "react";
import { IAnimal } from "../models/IAnimal";

export function AnimalApi(){
  useEffect(() => {
    if(!localStorage.getItem('animalsInLS')){
      axios
      .get<IAnimal[]>("https://animals.azurewebsites.net/api/animals")
      .then((response) => {
        localStorage.setItem('animalsInLS', JSON.stringify(response.data));
      });
    }
  });
}
