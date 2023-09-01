import fetchGames from "./fetchGame.js";
import showSlides from "./showSlides.js";
import getFour from "./getFour/getFour.js";
import buyNowBtn from "./cart/buyNowBtn.js";
import errorBox from "./errorBox.js";

const games = await fetchGames();

if (games.errors) {

    const container1 = document.querySelector(".slideshow-container")
    const [container2, container3] = document.querySelectorAll(".shop-grid");
    const displayError = [container1, container2, container3];

    displayError.forEach(error => error.innerHTML += errorBox(games))
}

else {
    const slides = document.getElementsByClassName("slideshow-container")[0].getElementsByClassName("img");
    showSlides(slides);
    getFour(games);
    buyNowBtn()
}

