export default function remove(game) {

    const getProducts = localStorage.getItem("products");
    let parsedProducts = JSON.parse(getProducts);

    let deleteProduct = false;
    const list = parsedProducts.filter((product) => {
        if (product === game.id) {
            if (deleteProduct) {
                return product;
            } else deleteProduct = true; 
        } else return product;

        localStorage.setItem("products", JSON.stringify(list));
        location.reload();
    }); 
}