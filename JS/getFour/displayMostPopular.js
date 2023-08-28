export default function displayMostPopular(games) {

    let mostPopular = "";
    for (let index = 0; index <= 3; index++) {
      mostPopular += `<div class="game-container">
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
    document.querySelector(".shop-grid").innerHTML = mostPopular;
  }