const addToDb = (id) => {
    let userCart = {};
    let storedUserCart = localStorage.getItem("user-cart");
    if (storedUserCart) {
        userCart = JSON.parse(storedUserCart);
    } else {
        localStorage.setItem("user-cart", JSON.stringify(userCart));
    }

    let quantity = userCart[id];
    if (quantity) {
        userCart[id] = quantity + 1;
    } else {
        userCart[id] = 1;
    }
    localStorage.setItem("user-cart", JSON.stringify(userCart));
};

export { addToDb };
