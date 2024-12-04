


// Variables globales
let cart = [];

// Función para agregar productos al carrito
function addToCart(productName, productPrice) {
  // Buscar si el producto ya está en el carrito
  const existingProduct = cart.find(item => item.name === productName);

  if (existingProduct) {
    existingProduct.quantity++; // Incrementar cantidad
  } else {
    cart.push({ name: productName, price: productPrice, quantity: 1 });
  }

  updateCartUI(); // Actualizar la interfaz
}

// Función para actualizar la interfaz del carrito
function updateCartUI() {
  const cartElement = document.getElementById('cart');
  cartElement.innerHTML = ''; // Limpiar contenido previo

  if (cart.length === 0) {
    cartElement.innerHTML = '<p>El carrito está vacío.</p>';
    return;
  }

  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <span>${item.name} x${item.quantity}</span>
      <span>$${item.price * item.quantity}</span>
      <button onclick="removeFromCart('${item.name}')">Eliminar</button>
    `;
    cartElement.appendChild(cartItem);
  });

  // Calcular total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalElement = document.createElement('p');
  totalElement.classList.add('total');
  totalElement.textContent = `Total: $${total}`;
  cartElement.appendChild(totalElement);
}

// Función para eliminar productos del carrito
function removeFromCart(productName) {
  cart = cart.filter(item => item.name !== productName);
  updateCartUI();
}

export default cart;