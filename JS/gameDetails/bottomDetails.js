const gameDetails = document.querySelector(".game-details");

export default function bottomDetails (detail) {

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