const products = [
  { name: "Table Lamp", price: 120, img: "https://images.unsplash.com/photo-1601979031925-3760f7f901c8?auto=format&fit=crop&w=300&h=200", id: 1 },
  { name: "Round Vase", price: 80, img: "https://images.unsplash.com/photo-1602080755445-0c3c51aa7a9b?auto=format&fit=crop&w=300&h=200", id: 2 },
  { name: "Wood Table Lamp", price: 150, img: "https://images.unsplash.com/photo-1631643549304-b0e22185d43d?auto=format&fit=crop&w=300&h=200", id: 3 },
  { name: "Ceramic Vase", price: 50, img: "https://images.unsplash.com/photo-1585841690641-7cb6c2d6ff27?auto=format&fit=crop&w=300&h=200", id: 4 },
];

const productList = document.getElementById("productList");
const cartItems = document.getElementById("cartItems");

function renderProducts() {
  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = \`
      <img src="\${product.img}" alt="\${product.name}" />
      <h4>\${product.name}</h4>
      <p>$\${product.price}</p>
      <button onclick="addToCart('\${product.name}', \${product.price})">Add to Cart</button>
      <button onclick="alert('Added to wishlist')">♡</button>
    \`;
    productList.appendChild(card);
  });
}

function addToCart(name, price) {
  const item = document.createElement("li");
  item.textContent = \`\${name} - $\${price}\`;
  cartItems.appendChild(item);
}

renderProducts();

const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");
const closeLogin = document.getElementById("closeLogin");
const closeSignup = document.getElementById("closeSignup");

loginBtn.onclick = () => loginModal.style.display = "block";
signupBtn.onclick = () => signupModal.style.display = "block";
closeLogin.onclick = () => loginModal.style.display = "none";
closeSignup.onclick = () => signupModal.style.display = "none";

window.onclick = function(event) {
  if (event.target === loginModal) loginModal.style.display = "none";
  if (event.target === signupModal) signupModal.style.display = "none";
};
