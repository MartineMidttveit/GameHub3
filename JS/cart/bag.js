import fetchGames from "../fetchGame.js";
import bagContent from "./bagContent.js";
import remove from "./remove.js"
import errorBox from "../errorBox.js";

const allGames = await fetchGames();

if (allGames.errors) {
    const bagContent = document.querySelector(".grid");
    bagContent.innerHTML = errorBox(allGames)
} else {

const getProducts = localStorage.getItem("products");
let parsedProducts = JSON.parse(getProducts);

if (parsedProducts && parsedProducts.length >= 1) {

    const results = parsedProducts.map((id) => allGames.find(game => game.id === id))

    results.forEach(game => bagContent(game))
    
    const removeBtn = document.querySelectorAll(".remove");
    removeBtn.forEach(btn => btn.addEventListener("click", function(e){   
    remove(e.target.id)
    }))
} else {
    const gameContainer = document.querySelector('.grid')
    const buttonHtml = document.querySelector(".button")
    const mainText = document.querySelector("h1")
    
    gameContainer.textContent =""
    buttonHtml.textContent = "Back to Shop"
    buttonHtml.href ="./shop.html"
    mainText.textContent = "SHOPPINGBAG IS EMPTY"
}}
