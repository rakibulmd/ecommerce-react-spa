const addToDb = (id) => {
    let userCart = {};
    let storedUserCart = localStorage.getItem("user-cart");
    if (storedUserCart) {
        userCart = JSON.parse(storedUserCart);
    }

    let quantity = userCart[id];
    if (quantity) {
        userCart[id] = quantity + 1;
    } else {
        userCart[id] = 1;
    }
    localStorage.setItem("user-cart", JSON.stringify(userCart));
    return userCart;
};

const getCart = () => {
    let userCart = {};
    let storedUserCart = localStorage.getItem("user-cart");
    if (storedUserCart) {
        userCart = JSON.parse(storedUserCart);
    }
    return userCart;
};

const clearLocalCart = () => {
    localStorage.removeItem("user-cart");
};

export { addToDb, getCart, clearLocalCart };
