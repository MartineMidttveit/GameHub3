async function getGames() {
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const genre = params.get("genre");

    try {
        const loadGames = await fetch("https://api.noroff.dev/api/v1/gamehub");
        const games = await loadGames.json();

        let display = ""

        games.map((game) => {
            if (genre && game.genre === genre) {
                display+= 
                `<div class="game-container">
                <a href="/HTML/gameDetails.html?id=${game.id}">
                <img src="${game.image}" alt="Game-covers of listed products"></a>
                <div class="game-info">
                <h2 class="game-title">${game.title}</h2>
                <p>${game.genre}</p>
                <p>£ ${game.price}</p>
                </div>
                <button class="buy-now">ADD TO CART</button>
                </div>`
            } 
            
            if (!genre) {
            display+= 
                `<div class="game-container">
                <a href="/HTML/gameDetails.html?id=${game.id}">
                <img src="${game.image}" alt="Game-covers of listed products"></a>
                <div class="game-info">
                <h2 class="game-title">${game.title}</h2>
                <p>${game.genre}</p>
                <p>£ ${game.price}</p>
                </div>
                <button class="buy-now">ADD TO CART</button>
                </div>`
            }
        });

        setTimeout(() => {
            document.querySelector(".games-noroff").innerHTML = display;
        }, 2000);
    } catch (error) {
        throw new Error("Error to fetch the game-data: " + error)
    }
}

getGames();
