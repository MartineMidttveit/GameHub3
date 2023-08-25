// GAME-DETAILS //

const gameContainer = document.querySelector(".game-box");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = `https://api.noroff.dev/api/v1/gamehub/${id}`;
async function getGames(url) {
    const response = await fetch(url);
    const game = await response.json();

    gameContainer.innerHTML = 
    `<div class="gameContainer">
    <figure class="product-image"><img src="${game.image}"></figure>
    <div class="game-text">
    <h1 id="name">${game.title}</h1>
    <h2 class="orange-subtitle">${game.genre}</h2>
    <div class="rating">
        <span class="empty-stars"><i class="fa-regular fa-star"></i></span>
        <span class="empty-stars"><i class="fa-regular fa-star"></i></span>
        <span class="empty-stars"><i class="fa-regular fa-star"></i></span>
        <span class="empty-stars"><i class="fa-regular fa-star"></i></span>
        <span class="empty-stars"><i class="fa-regular fa-star"></i></span>
    </div>

    <span id="price">£ ${game.price}</span>

    <div class="dropdown-wrapper">
                <form id="device-form" action="select-device">
                  <div class="dropdown">
                    <input type="text" placeholder="DEVICE:" id="device-input" aria-label="choose device">
                    <ul id="device-list" class="dropdown-list">
                      <li>Playstation 2</li>
                      <li>Playstation 3</li>
                      <li>Playstation 5</li>
                      <li>Digital</li>
                      <li>X-Box</li>
                      <li>X-Box ONE</li>
                    </ul>
                  </div>
                </form>
              
                <form id="condition-form" action="select-device">
                  <div class="dropdown">
                    <input type="text" placeholder="CONDITION:" id="condition-input" aria-label="choose condition">
                    <ul id="condition-list" class="dropdown-list">
                      <li>New</li>
                      <li>Pre-owned</li>
                      <li>Digital</li>
                    </ul>
                  </div>
                </form>
              </div>

              <a href="/HTML/shoppingbag.html?id=${game.id}" class="underline">
                    <button class="buyNow linear-btn scale">ADD TO CART</button>
              </a>
    <div class="game-desc">
    <p id="cod-description">${game.description}</p>
    </div>
    </div>`
}

getGames(url);

// GAME-DETAILS //

const gameDetails = document.querySelector(".game-details");

const string = document.location.search;
const parameters = new URLSearchParams(string);
const ids = params.get("id");

const api = `https://api.noroff.dev/api/v1/gamehub/${id}`;
async function getDetails(api) {
    const response = await fetch(api);
    const detail = await response.json();

gameDetails.innerHTML = 

`<div class="game-description">
    <h2 class="orange-subtitle">DESCRIPTION</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>

  <div class="age-limit">
    <h2 class="orange-subtitle">AGE-LIMIT: <span class="orange-subtitle">${detail.ageRating}</span></h2>
    <p id="ageLimitation"></p>

    <p><span id="publisher">Publisher:</span> ${detail.tags[0]}</p>
    <p><span id="devices">Tags: </span>#${detail.tags[0]} #${detail.tags[1]}</p>
    <p><span id="date">Released: </span>${detail.released}</p>
    <p><span id="genre">Genre: </span>${detail.genre}</p>
  </div>`
 }

getDetails(api);


// RELATED GAMES //

async function getFour () {
    const loadGames = await fetch("https://api.noroff.dev/api/v1/gamehub"); 
    const games = await loadGames.json();
    let displayMostPopular = "";
  
    for (let index = 2; index <= 5; index++) { 
      displayMostPopular+=
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
        </div>`
      };
      document.querySelector(".shop-grid").innerHTML = displayMostPopular; 
    }

getFour ();

