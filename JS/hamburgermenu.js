function openHamburgerMenu() {
    document.querySelector(".hamburger-icon").addEventListener('click', () => {
        const hamburgerMenu = document.querySelector(".nav-header")
        hamburgerMenu.style.display = "block"
    })
}

function closeHamburgerMenu() {
    document.querySelector(".cross-icon").addEventListener('click', () => {
        const hamburgerMenu = document.querySelector(".nav-header")
        hamburgerMenu.style.display = "none"
    })
}
