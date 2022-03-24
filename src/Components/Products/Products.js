import React from "react";
import "./Products.css";

const Products = ({ product }) => {
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
            <button className="btn-cart">Add to Cart</button>
        </div>
    );
};

export default Products;
