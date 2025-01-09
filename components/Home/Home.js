import "./Home.css"
import data from "../../data/data";
const { tipos, highlight, getthelook, trend, trend1,trend2, trend3 } = data;

const template = () => `
  <img id="portada" src="https://static.bershka.net/assets/public/e049/630a/b7584a248a61/5f0937a8b715/11008560040-b1o/11008560040-b1o.jpg?ts=1730298591163&w=750" id="portada"></a>
  <section id="tipos"><ul>
  <li id="prueba1"><img src="${tipos.vestidos}">
    <h2>Abrigos</h2></li>
    <li id="prueba1"><img src="${tipos.jeans}">
    <h2>Pantalones</h2></li>
    <li id="prueba1"><img src="${tipos.jersey}">
    <h2>Camisetas</h2></li>
    <li id="prueba1"><img id="" src="${tipos.pantalones}"><h2>Abrigos</h2></li></ul>
</section>
<article id="highlight">
<img id="highlight" src="${highlight.botas}">
</article>
<h3 class="h3get"><a href="#" id="getthelook">Get the look ➜</a></h3>
 <section id="cartas">
    <ul><li id="prueba1"><a href="https://static.pxlecdn.com/photos/705485708/xl/6f7123ee5d7d33474f57.jpg"><img src="${getthelook.street}"></a>
    <h2>PARTY</h2></li>
    <li id="prueba1"><img src="${getthelook.casual}">
    <h2>STREETSTYLE</h2></li>
    <li id="prueba1"><img src="${getthelook.backtocity}">
    <h2>CASUAL</h2></li>
    <li id="prueba1"><img src="${getthelook.leather}">
    <h2>FAUX NUR</h2></li>
    </ul>
</section>
<h3><a href="#" id="getthelook"> Te puede interesar ➜</a></h3>
 <section id="trends"><ul>
    <li id="producto"><img src="${trend.img}">
    <h2 class="description">${trend.title}</h2>
    <p>${trend.price}</p>
    <button onclick="">Comprar</button></li>
    <li id="producto"><img src="${trend1.img}">
    <h2 class="description">${trend1.title}</h2>
    <p>${trend1.price}</p>
    <button id="botoncomprar">Comprar</button></li>
    <li id="prueba1"><img src="${trend2.img}">
    <h2 class="description">${trend2.title}</h2>
    <p>${trend2.price}</p>
    <button id="botoncomprar">Comprar</button></li>
    <li id="prueba1"><img src="${trend3.img}">
    <h2 class="description">${trend3.title}</h2>
    <p>${trend3.price}</p>
    <button id="botoncomprar">Comprar</button></li></ul>
</section>
<section class="descuento">
<h4>Consigue un 10% de descuento en tu primera compra</h4>
<p>Introduce tu email y suscribete a nuestro newsletter</p>
<form id="formulario">
    <div class="form">
        <input type="text">
    </div>
</form>
</section>"
`;


const Home = () => {
  document.querySelector("main").innerHTML = template();
};



export default Home;