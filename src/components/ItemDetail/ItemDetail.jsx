import { useCart } from "../../context/CartContext"
import { Item } from "../Item/Item"
import "../ItemDetail/ItemDetail.css"

export const ItemDetail = ({item}) => {
    const {addItem} = useCart()
    return ( 
    <div className="item-detail">
        <Item {...item} >
            <button className="pixelify-sans-uniquifier" onClick={() => addItem(item)}>Agregar al carrito</button>
        </Item>
    </div>

    )
}