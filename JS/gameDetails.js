import fetchGames from "./fetchGame.js";
import topDetails from "./gameDetails/topDetails.js";
import bottomDetails from "./gameDetails/bottomDetails.js";
import displayMostPopular from "./getFour/displayMostPopular.js";

// GAME-DETAILS //

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const games = await fetchGames();
const currentGame = games.find((game) => game.id === id);

topDetails(currentGame);
bottomDetails(currentGame);
displayMostPopular(games);


