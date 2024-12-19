import "./style.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { Looks } from "./components/Looks/Looks";
import { linkPage } from "./utils/linkPage";
import { Hoodie } from "./components/Hoodie/Hoodie";
import { Pantalones } from "./components/Pantalones/Pantalones";
import { Shoes } from "./components/Shoes/Shoes";

const buildWebsite = () => {
  Navbar();
  Home();
  Footer();
};

buildWebsite();


linkPage("#homelink", Home);
linkPage("#looklink", Looks);
linkPage("#abrigoslink", Hoodie);
linkPage("#pants", Pantalones);
linkPage("#shoes", Shoes);


class Cart {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.render();
    this.updateUI();
  }

  // Renderizar carrito
  render() {
    this.container.innerHTML = `
      <span class="cart-icon" id="cartToggle">🛒 COMPRAR</span>
      <div class="cart-dropdown" id="cartDropdown">
        <p id="cartMessage">El carrito está vacío.</p>
      </div>
    `;

    // Evento para desplegar el carrito
    document.getElementById('cartToggle').addEventListener('click', () => {
      const dropdown = document.getElementById('cartDropdown');
      dropdown.classList.toggle('active');
    });
  }
}

//Inicializar componentes
const cart = new Cart('cartComponent');
new ProductList('products', cart);
