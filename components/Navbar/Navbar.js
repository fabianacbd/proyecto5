import "./Navbar.css";

const template =  () => 
     `<h1>BIANCA</h1>
      <nav>
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
          <a href="#" id="pants">Pants</a>
        </li>
        <li>
          <a href="#" id="looklink">Looks</a>
        </li>
        <li>
          <a href="#" id="shoes">Shoes</a>
        </li>
         <div class="cart-container" id="cartComponent">
    </div>
      </ul>
    </nav>`;

    const Navbar = () => {
        document.querySelector("header").innerHTML = template();
      };

  export default Navbar;