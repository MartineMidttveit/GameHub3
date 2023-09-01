export default async function fetchGames (id = "") {

    try {
        const loadGames = await fetch("https://api.noroff.dev/api/v1/gamehubb/" + id);
        const games = await loadGames.json();

        return games;
    }

    catch (error) {
        return error;
    }
}