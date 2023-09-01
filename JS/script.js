import addToCart from "./cart/addToCart.js";

const count = document.getElementById("count");

const getProducts = localStorage.getItem("products");
let parsedProducts = JSON.parse(getProducts);

if (parsedProducts.length > 0) count.textContent = parsedProducts.length;
else count.textContent = 0;