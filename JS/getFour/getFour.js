import displayMostPopular from "./displayMostPopular.js";
import displayNewReleases from "./displayNewReleases.js";

export default function getFour (games) {
    displayMostPopular(games);
    displayNewReleases(games);
}

