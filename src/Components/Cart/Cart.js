import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
    return (
        <div className="cart">
            <h3 className="cart-title">
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Your
                Cart:
            </h3>
            <p>Items Added: {cart.length}</p>
        </div>
    );
};

export default Cart;
