import React, { useEffect, useState } from "react";
import { addToDb } from "../../utilities/addToDb";
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

    const addToCartHandler = (product) => {
        setCart([...cart, product]);
        addToDb(product.id);
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
