import fetchGames from "./fetchGame.js";
import topDetails from "./gameDetails/topDetails.js";
import bottomDetails from "./gameDetails/bottomDetails.js";
import displayMostPopular from "./getFour/displayMostPopular.js";
import addToCart from "./cart/addToCart.js";

// GAME-DETAILS //

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const games = await fetchGames();
const currentGame = games.find((game) => game.id === id);

topDetails(currentGame);
bottomDetails(currentGame);
displayMostPopular(games);

// ADD TO CART //

const allBtns = document.querySelectorAll(".buy-now");
allBtns.forEach(btn => {
    btn.addEventListener('click', function(event) {
        event.preventDefault();

        const curItem = event.target.parentElement.href;
        const url = new URL(curItem);
        const currentID = url.searchParams.get("id");

        addToCart(currentID)
    });
});
