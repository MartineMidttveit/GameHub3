const gameContainer = document.querySelector('.shoppingbag')

const queryString = document.location.search
const params = new URLSearchParams(queryString)
const id = params.get('id')

const url = `https://api.noroff.dev/api/v1/gamehub/${id}`
async function getGames (url) {
  if (id) {
    try {
      const response = await fetch(url)
      const game = await response.json()

      gameContainer.innerHTML +=
        `<h1 class="subtitles">SHOPPINGBAG</h1>
        <div class="grid">
            <div class="column"></div>

            <div class="column">
                <h2>PRODUCT:</h2>
            </div>

            <div class="column">
                <h2>QUANTITY:</h2>
            </div>

            <div class="column">
                <h2 class="price">PRICE</h2>
            </div>

            <div class="column">
                <h2 class="genre">GENRE</h2>
            </div> 
            
            <div class="column">
              <figure class="product-image">
                <img src="${game.image}" alt="">
              </figure>
            </div>

            <div class="column">
                <p class="product-name">${game.title}</p>
            </div>

            <div class="column">
                <form class="quantity">
                  <input type="number">
                </form>
            </div>

            <div class="column">
                <p class="product-price">${game.price}</p>
            </div>
            <div class="column">
                <p class="product-genre">${game.genre}</p>
            </div> 
        </div>
        <button class="button scale">PAYMENT</button>`
    } catch (error) {
      throw new Error('Error to load games in the shopping bag: ' + error.message)
    }
  } else {
    gameContainer.innerHTML +=
    `<h1 class="subtitles">SHOPPINGBAG IS EMPTY</h1>`
  }
}

getGames(url)