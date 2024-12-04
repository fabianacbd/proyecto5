import { Zapatos } from "../Zapatos/Zapatos";
import { cleanPage } from "../../utils/cleanPage";


export const Shoes = () => {
  const main = document.querySelector("main");
  cleanPage(main);
 main.innerHTML = Zapatos()
  };