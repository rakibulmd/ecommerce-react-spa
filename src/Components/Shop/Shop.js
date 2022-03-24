import React, { useEffect, useState } from "react";
import { addToDb, getCart } from "../../utilities/addToDb";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);
    useEffect(() => {
        let storedCart = getCart();
        console.log(storedCart);
        let savedCart = [];
        for (const id in storedCart) {
            let addedProduct = products.find((product) => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);

    const addToCartHandler = (clickedProduct) => {
        let newCart = [];
        const exist = cart.find((product) => product.id === clickedProduct.id);
        if (!exist) {
            clickedProduct.quantity = 1;
            newCart = [...cart, clickedProduct];
        } else {
            let rest = cart.filter(
                (product) => product.id !== clickedProduct.id
            );
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }
        setCart(newCart);
        addToDb(clickedProduct.id);
    };
    return (
        <div className="shop">
            <div className="products-container">
                {products.map((product) => (
                    <Products
                        key={product.id}
                        product={product}
                        addToCartHandler={addToCartHandler}
                    ></Products>
                ))}
            </div>
            <div className="cart-container">
                <Cart cart={cart} clearCart={setCart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
