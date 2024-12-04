import "./Footer.css";


const template = () => `<footer>
        <ul class="links">
            <li>Ayuda</li>
            <li>Comprar online</li>
            <li>Pago</li>
            <li>Envio</li>
            <li>Devoluciones</li>
            <li>Tarjeta Regalo</li>
            <li>Solicitar factura</li>
        </ul>
        <ul class="links">
            <li>We are Bianca</li>
            <li>Sobre Biana</li>
            <li>Sostenibilidad</li>
            <li>Trabaja con nosotros</li>
            <li>Prensa</li>
            <li>Trabaja con nosotros</li>
            <li>Nuestras tiendas</li>
        </ul>
        <ul class="links">
            <li>Te puede interesar</li>
            <li>Vestidos mujer</li>
            <li>Cazadoras mujer</li>
            <li>Baggy jeans</li>
            <li>Pantalones mujer</li>
            <li>Faldas mujer</li>
        </ul>
    <p>Bianca 2024 © </p>
    </footer>`;

const Footer = () => {
    document.querySelector("footer").innerHTML = template();
  };

  export default Footer;