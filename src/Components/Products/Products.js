import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Products.css";

const Products = ({ product, addToCartHandler }) => {
    const { img, name, price, seller, ratings } = product;
    return (
        <div className="product">
            <img src={img} alt={name} />
            <div className="product-info">
                <h5>{name}</h5>
                <p>Price: $ {price}</p>
                <div className="product-rating">
                    <p>Brand: {seller}</p>
                    <p>
                        <small>Ratings: {ratings} / 5</small>
                    </p>
                </div>
            </div>
            <button
                className="btn-cart"
                onClick={() => {
                    addToCartHandler(product);
                }}
            >
                Add to Cart{" "}
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;
