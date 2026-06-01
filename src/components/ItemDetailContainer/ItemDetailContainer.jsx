import { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import "../ItemDetailContainer/ItemDetailContainer.css"
import { getProductById } from "../../services/productsService";

export const ItemDetailContainer = () => {
    const {id} = useParams();

    const [itemDetail, setItemDetail] =useState(null);
    const [loading, setLoading] = useState(true)

    useEffect (() => {
        // fetch("/data/products.json")
        // .then((res) => res.json())
        // .then((data) => {
        //     const item = data.find ((element) => String(element.id) === id);
        //     if (item) {
        //         setItemDetail(item)
        //         return;
        //     }

        //     throw new Error("Elemento no encontrado");
        // })
    getProductById(id)
        .then ((data) => setItemDetail(data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Cargando...</p>;
    if (!itemDetail) return <p>Producto no encontrado</p>;

    return (
        <section>
            <h1 className="pixelify-sans-uniquifier">Detalles del Producto</h1>
            <div className="products-container">
                <ItemDetail item={itemDetail} />
            </div>
        </section>
    );
}