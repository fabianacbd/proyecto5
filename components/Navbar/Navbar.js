import "./Navbar.css";

const template =  () => 
     `<nav>
      <h1>BIANCA</h1>
      <label for="sandwich">☰</label>
      <input id="sandwich" type="checkbox"/>
      <ul>
        <li>
          <a href="#" id="homelink">Home</a>
        </li>
        <li>
          <a href="#" id="abrigoslink">Abrigos</a>
        </li>
        <li>
          <a href="#" id="pants">Pantalones</a>
        </li>
        <li>
          <a href="#" id="looklink">Looks</a>
        </li>
        <li>
          <a href="#" id="shoes">Shoes</a>
        </li>
        <div class="cart-container">
        <span class="cart-icon" onclick="toggleCart()"> 🛒 Comprar </span>
        <div class="cart-dropdown" id="cartDropdown">
        <p id="cartMessage">El carrito esta vacio.</p>
        </div>
        </div>
        </div>
      </ul>
    </nav>`;

    const Navbar = () => {
        document.querySelector("header").innerHTML = template();
      };

  export default Navbar;