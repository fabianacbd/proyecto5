import { Getthelook } from "../../GetTheLook/getthelook";
import { cleanPage } from "../../utils/cleanPage";


export const Looks = () => {
  const main = document.querySelector("main");
  cleanPage(main);
 main.innerHTML = Getthelook()
  };