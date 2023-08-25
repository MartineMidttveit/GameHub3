const gameContainer = document.querySelector(".shoppingbag");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = `https://api.noroff.dev/api/v1/gamehub/${id}`;
async function getGames(url) {
    const response = await fetch(url);
    const game = await response.json();

    gameContainer.innerHTML+=
    `<h1 class="subtitles">SHOPPINGBAG</h1>
    <div class="grid">
            <div class="column">
              <figure class="product-image">
                <img src="${game.image}" alt="">
              </figure>
            </div>
            <div class="column">
                <h2>Product:</h2>
                <p class="product-name">${game.title}</p>
            </div>
            <div class="column">
                <h2>Quantity:</h2>
                <form class="quantity">
                  <input type="number">
                </form>
            </div>
            <div class="column">
                <h2 class="price">Price:</h2>
                <p class="product-price">${game.price}</p>
            </div>
            <div class="column">
                <h2 class="devices">Device:</h2>
            </div> 
    </div>
    <button class="button scale">PAYMENT</button>`
}

getGames(url);