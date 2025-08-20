// Sample products data
const products = [
  {
    id: 1,
    name: "Product One",
    price: 29.99,
    img: "https://via.placeholder.com/250x250?text=Product+1",
  },
  {
    id: 2,
    name: "Product Two",
    price: 39.99,
    img: "https://via.placeholder.com/250x250?text=Product+2",
  },
  {
    id: 3,
    name: "Product Three",
    price: 19.99,
    img: "https://via.placeholder.com/250x250?text=Product+3",
  },
  {
    id: 4,
    name: "Product Four",
    price: 49.99,
    img: "https://via.placeholder.com/250x250?text=Product+4",
  },
];

// Cart array to keep track of added items
let cart = [];

const productGrid = document.getElementById("product-grid");
const cartCount = document.getElementById("cart-count");

// Function to render products
function renderProducts() {
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    productCard.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <h4>${product.name}</h4>
      <p class="price">$${product.price.toFixed(2)}</p>
      <button data-id="${product.id}">Add to Cart</button>
    `;

    productGrid.appendChild(productCard);
  });
}

// Update cart count display
function updateCartCount() {
  cartCount.textContent = cart.length;
}

// Add event listeners to buttons
function setupAddToCartButtons() {
  productGrid.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      const productId = Number(event.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      if (product) {
        cart.push(product);
        updateCartCount();
        alert(`${product.name} added to cart!`);
      }
    }
  });
}

// Initialize page
function init() {
  renderProducts();
  setupAddToCartButtons();
  updateCartCount();
}

document.addEventListener("DOMContentLoaded", init);
