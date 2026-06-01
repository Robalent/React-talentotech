import { useCart } from "../../context/CartContext"

export const CartSummary = () => {
    const {getCartTotal, checkout} = useCart()
    const total = getCartTotal()

    return (
        <>
        <p>TOTAL A PAGA: ${total}</p>
        {/* <p>TOTAL A PAGAR: ${getCartTotal2()}</p> para quantity */}
        <button className="btn bg-success primary" onClick={checkout}>FINALIZAR COMPRA</button>
        </>
    )
}