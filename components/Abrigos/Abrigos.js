import "./Abrigos.css"
import data from "../../data/data"
const {abrigos } = data;


 export const Abrigos = () => 
`<h3>Abrigos ➜</h3>
 <section id="abrigos">
 <ul>
 <li><img src="${abrigos.modelo1.img}">
 <p>${abrigos.modelo1.name}</p>
 <p>${abrigos.modelo1.price}</p>
  <button id="botoncomprar">Comprar</button>
 </li>
 <li><img src="${abrigos.modelo2.img}">
 <p>${abrigos.modelo2.name}</p>
 <p>${abrigos.modelo2.price}</p>
 <button onclick="addToCart('Producto 1', 10)">Comprar</button></li>
 <li><img src="${abrigos.modelo3.img}">
 <p>${abrigos.modelo3.name}</p>
 <p>${abrigos.modelo3.price}</p></li>
 <li><img src="${abrigos.modelo4.img}">
 <p>${abrigos.modelo4.name}</p>
 <p>${abrigos.modelo4.price}</p></li>
 <li><img src="${abrigos.modelo5.img}">
 <p>${abrigos.modelo5.name}</p>
 <p>${abrigos.modelo5.price}</p></li>
 <li><img src="${abrigos.modelo6.img}">
 <p>${abrigos.modelo6.name}</p>
 <p>${abrigos.modelo6.price}</p></li>
 </ul>
 </section>`;
