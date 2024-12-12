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
    this.cart = this.loadFromStorage();
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

  // Agregar producto al carrito
  addToCart(product) {
    const existingProduct = this.cart.find(item => item.name === product.name);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }

    this.saveToStorage();
    this.updateUI();
  }

  // Eliminar producto del carrito
  removeFromCart(productName) {
    this.cart = this.cart.filter(item => item.name !== productName);
    this.saveToStorage();
    this.updateUI();
  }

  // Actualizar interfaz del carrito
  updateUI() {
    const cartDropdown = document.getElementById('cartDropdown');
    const cartMessage = document.getElementById('cartMessage');

    cartDropdown.innerHTML = ''; // Limpiar contenido previo

    if (this.cart.length === 0) {
      cartMessage.textContent = 'El carrito está vacío.';
      cartDropdown.appendChild(cartMessage);
      return;
    }

    this.cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <span>${item.name} x${item.quantity}</span>
        <span>$${item.price * item.quantity}</span>
        <button class="remove-btn">❌</button>
      `;

      // Evento para eliminar producto
      cartItem.querySelector('.remove-btn').addEventListener('click', () => {
        this.removeFromCart(item.name);
      });

      cartDropdown.appendChild(cartItem);
    });

    // Mostrar total
    const total = this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalElement = document.createElement('div');
    totalElement.classList.add('total');
    totalElement.textContent = `Total: $${total}`;
    cartDropdown.appendChild(totalElement);
  }

  // Guardar carrito en localStorage
  saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  // Cargar carrito desde localStorage
  loadFromStorage() {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  }
}

class ProductList {
  constructor(containerId, cart) {
    this.container = document.getElementById(containerId);
    this.cart = cart;
    this.products = [
      { name: 'Producto 1', price: 10 },
      { name: 'Producto 2', price: 20 },
    ];

    this.render();
  }

  // Renderizar productos
  render() {
    this.products.forEach(product => {
      const productElement = document.getElementsById('producto');
      productElement.classList.add('producto');

      // Evento para agregar al carrito
      productElement.getElementById('botoncomprar').addEventListener('click', () => {
        this.cart.addToCart(product);
      });

      this.container.appendChild(productElement);
    });
  }
}

// Inicializar componentes
const cart = new Cart('cartComponent');
new ProductList('products', cart);
