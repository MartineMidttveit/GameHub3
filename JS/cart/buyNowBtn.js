import addToCart from "./addToCart.js";

export default function buyNowBtn () {
    const allBtns = document.querySelectorAll(".buy-now");
    allBtns.forEach(btn => {
    btn.addEventListener('click', function(event) {
        event.preventDefault();

        const curItem = event.target.parentElement.href;
        const url = new URL(curItem);
        const currentID = url.searchParams.get("id");

        addToCart(currentID)
    });
});
};