import "./Pants.css";
import data from "../../data/data";
const { pants } = data;

 export const Pants = () => 
`<h3>Pantalones ➜</h3>
 <section id="pants"><ul>
<li><img src="${pants.pant1.img}">
 <p>${pants.pant1.name}</p>
 <p>${pants.pant1.price}</p></li>
 <li><img src="${pants.pant2.img}">
 <p>${pants.pant3.name}</p>
 <p>${pants.pant3.price}</p></li>
 <li><img src="${pants.pant4.img}">
 <p>${pants.pant4.name}</p>
 <p>${pants.pant4.price}</p></li>
 <li><img src="${pants.pant5.img}">
 <p>${pants.pant5.name}</p>
 <p>${pants.pant5.price}</p></li>
 <li><img src="${pants.pant6.img}">
 <p>${pants.pant6.name}</p>
 <p>${pants.pant6.price}</p></li>
</ul>
</section>
 `;