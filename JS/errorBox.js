export default function errorBox (games) {
    return `<div class="error-box">
    <h2 class="subtitles">WOPS... ERROR</h2>
    <i class="fa-solid fa-triangle-exclamation"></i>
    <p class="error-p">${games.statusCode} ${games.status}</p>
    </div>`
}