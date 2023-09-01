import buyNowBtn from "./cart/buyNowBtn.js";
import fetchGames from "./fetchGame.js";
import errorBox from "./errorBox.js";

const gamesContainer = document.querySelector('.games-noroff')

  const games = await fetchGames()

  if (games.errors) {
    gamesContainer.innerHTML = errorBox(games)
  }

  else {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const genre = params.get('genre');

  let display = '';

      games.forEach((game) => {
          if (!genre || game.genre === genre) {
              display +=
                  `<div class="game-container">
                    <a href="/HTML/gameDetails.html?id=${game.id}">
                      <img src="${game.image}" alt="Game-covers of listed products"></a>
                    <div class="game-info">
                      <h2 class="game-title">${game.title}</h2>
                      <p>${game.genre}</p>
                      <p>£ ${game.price}</p>
                    </div>
                    <a href="/HTML/shoppingbag.html?id=${game.id}" class="underline">
                      <button class="buy-now">ADD TO CART</button>
                    </a>
                  </div>`;
          }
      });

      gamesContainer.innerHTML = display;

      buyNowBtn()

    }