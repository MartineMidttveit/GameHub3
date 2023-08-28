console.log("test")

import fetchGames from "./fetchGame.js";
import showSlides from "./showSlides.js";
import getFour from "./getFour/getFour.js";

const games = await fetchGames();

const slides = document.getElementsByClassName("slideshow-container")[0].getElementsByClassName("img");

showSlides(slides);
getFour(games);




