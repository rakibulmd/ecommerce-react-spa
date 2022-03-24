import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { clearLocalCart } from "../../utilities/addToDb";
import "./Cart.css";

const Cart = ({ cart, clearCart }) => {
    let totalItem = 0;
    let totalPrice = 0;
    let shipping = 0;
    for (const product of cart) {
        totalItem = product.quantity + totalItem;
        totalPrice = totalPrice + product.quantity * product.price;
        shipping = shipping + product.shipping;
    }
    let tax = parseFloat((totalPrice * 0.1).toFixed(2));
    let grandTotal = totalPrice + shipping + tax;
    return (
        <div className="cart">
            <h3 className="cart-title">
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Your
                Cart:
            </h3>
            <p>Items Added: {totalItem}</p>
            <p>Total Price: {totalPrice}</p>
            <div>
                <p>
                    <small>Tax: {tax}</small>
                </p>
                <p>
                    <small>Shipping: {shipping}</small>
                </p>
            </div>
            <h4>Grand Total: {grandTotal}</h4>
            <button
                onClick={() => {
                    clearCart([]);
                    clearLocalCart();
                }}
            >
                Clear Cart
            </button>
        </div>
    );
};

export default Cart;
