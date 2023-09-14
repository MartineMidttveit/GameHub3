export default function remove(id) {

    const getProducts = localStorage.getItem("products");
    let parsedProducts = JSON.parse(getProducts);
    let deleteProduct = false;
    const list = parsedProducts.filter((product) => {
        if (product === id) {
            if (deleteProduct) {
                return product;
            } else deleteProduct = true; 
        } else return product;
       
    }); 
    localStorage.setItem("products", JSON.stringify(list));
    location.reload();
}


