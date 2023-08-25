/// Slideshow ///

var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slideshow-container")[0].getElementsByClassName("img");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 4000);
}

/// MOST POPULAR ///

async function getFour() {
    const loadGames = await fetch("https://api.noroff.dev/api/v1/gamehub");
    const games = await loadGames.json();
    let displayMostPopular = "";
    let displayNewReleases = "";
  
    for (let index = 0; index <= 3; index++) {
      displayMostPopular +=
        `<div class="game-container">
          <a href="/HTML/gameDetails.html?id=${games[index].id}">
          <img src="${games[index].image}" alt="Game-covers of listed products"></a>
          <div class="game-info">
          <h2 class="game-title">${games[index].title}</h2>
          <p>${games[index].genre}</p>
          <p>£ ${games[index].price}</p>
          </div>
          <a href="/HTML/shoppingbag.html?id=${games[index].id}" class="underline">
            <button class="buy-now">ADD TO CART</button>
          </a>
          </div>`;
    }
    document.querySelector(".shop-grid").innerHTML = displayMostPopular;
  
    const startIndex = games.length - 4;
  
    if (startIndex >= 0) {
      for (let index = startIndex; index < games.length; index++) {
        displayNewReleases +=
          `<div class="game-container">
            <a href="/HTML/gameDetails.html?id=${games[index].id}">
            <img src="${games[index].image}" alt="Game-covers of listed products"></a>
            <div class="game-info">
            <h2 class="game-title">${games[index].title}</h2>
            <p>${games[index].genre}</p>
            <p>£ ${games[index].price}</p>
            </div>
            <a href="/HTML/shoppingbag.html?id=${games[index].id}" class="underline">
              <button class="buy-now">ADD TO CART</button>
            </a>
            </div>`;
      }
      document.querySelector("#newReleases").innerHTML = displayNewReleases;
    }
  }
  
  getFour();

