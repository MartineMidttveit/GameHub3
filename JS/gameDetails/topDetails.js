const gameContainer = document.querySelector(".game-box");

export default function topDetails(game) {
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
                    <button class="buy-now linear-btn scale">ADD TO CART</button>
              </a>
    <div class="game-desc">
    <p id="cod-description">${game.description}</p>
    </div>
    </div>`
}

