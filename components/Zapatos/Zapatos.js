import "./Zapatos.css";
import data from "../../data/data";
const { zapatos } = data;

 export const Zapatos = () => 
`<h3>Zapatos ➜</h3>
 <section id="pants"><ul>
<li><img src="${zapatos.shoes1.img}">
 <p>${zapatos.shoes1.name}</p>
 <p>${zapatos.shoes1.price}</p></li>
 <li><img src="${zapatos.shoes2.img}">
 <p>${zapatos.shoes2.name}</p>
 <p>${zapatos.shoes2.price}</p></li>
 <li><img src="${zapatos.shoes3.img}">
 <p>${zapatos.shoes3.name}</p>
 <p>${zapatos.shoes3.price}</p></li>
 <li><img src="${zapatos.shoes4.img}">
 <p>${zapatos.shoes4.name}</p>
 <p>${zapatos.shoes4.price}</p></li>
 <li><img src="${zapatos.shoes5.img}">
 <p>${zapatos.shoes5.name}</p>
 <p>${zapatos.shoes5.price}</p></li>
 <li><img src="${zapatos.shoes6.img}">
 <p>${zapatos.shoes6.name}</p>
 <p>${zapatos.shoes6.price}</p></li>
</ul>
</section>
 `;