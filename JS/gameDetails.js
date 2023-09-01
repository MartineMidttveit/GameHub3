import fetchGames from "./fetchGame.js";
import topDetails from "./gameDetails/topDetails.js";
import bottomDetails from "./gameDetails/bottomDetails.js";
import displayMostPopular from "./getFour/displayMostPopular.js";
import buyNowBtn from "./cart/buyNowBtn.js";
import errorBox from "./errorBox.js";

// GAME-DETAILS //

const games = await fetchGames();

if (games.errors) {
    const container1 = document.querySelector(".game-box")
    const container2 = document.querySelector(".shop-grid");
    const displayError = [container1, container2];
    
    displayError.forEach(error => error.innerHTML += errorBox(games))
}

else {

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const currentGame = games.find((game) => game.id === id);

topDetails(currentGame);
bottomDetails(currentGame);
displayMostPopular(games);
buyNowBtn()
}

