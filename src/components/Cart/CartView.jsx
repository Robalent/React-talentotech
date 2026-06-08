import {useCart} from "../../context/CartContext";
import { Link } from "react-router-dom";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";
import "./Cart.css"

export const CartView = () => {
    const {cart} = useCart()

    return (
        <section className="cart-container">
            <h1 className="pixelify-sans-uniquifier">Tu carrito de compras</h1>

            {cart.length ? (
            <>
                <CartList/>
                <CartSummary/>
            </>
            ) : (
            <>
            <p>El carrito está vacío</p>
            <Link className="btn-back" to={"/"}> Ver los productos </Link>
            </>          
            )}
        </section>
    )
}