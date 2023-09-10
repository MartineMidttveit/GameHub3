export default function bagContent(game) {
    const gameContainer = document.querySelector('.grid')
    gameContainer.innerHTML +=

    `<div class="column">
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
        <i class="fa-solid fa-xmark remove" id="${game.id}"></i>
    </div>
    
    <div class="mobile">
        <div class="column-1">
            <figure class="product-image">
                <img src="${game.image}" alt="">
            </figure>
        </div>

        <div class="column-2">
            <p class="product-name">${game.title}</p>
            <p class="product-price">${game.price}</p>
            <form class="quantity">
                <input type="number">
                <i class="fa-solid fa-xmark remove" id="${game.id}"></i>
            </form>
        </div>
    </div>
    
    `
};



