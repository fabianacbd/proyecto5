import { Pants } from "../Pants/Pants"
import { cleanPage } from "../../utils/cleanPage";


export const Pantalones = () => {
  const main = document.querySelector("main");
  cleanPage(main);
 main.innerHTML = Pants()
  };