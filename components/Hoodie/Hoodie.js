import { Abrigos } from "../../components/Abrigos/Abrigos";
import { cleanPage } from "../../utils/cleanPage";


export const Hoodie = () => {
  const main = document.querySelector("main");
  cleanPage(main);
 main.innerHTML = Abrigos()
  };