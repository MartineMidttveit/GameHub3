import fetchGames from "../fetchGame.js";
import bagContent from "./bagContent.js";

const allGames = await fetchGames();

const getProducts = localStorage.getItem("products");
let parsedProducts = JSON.parse(getProducts);

const results = parsedProducts.map((id) => allGames.find(game => game.id === id))

results.forEach(game => bagContent(game))