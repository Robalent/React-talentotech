import { Link, useParams } from "react-router-dom"
import { useEffect } from "react"


export const ProductSuccess = () => {
    const {id} = useParams()

    return (
        <section className="success-page">
            {/* <div className="success-icon">✅</div> */}

            <h2 className="geist-pixel-uniquifier">¡Producto cargado con éxito!</h2>
            <p><span>ID del producto: </span> {id}</p>
            <p>Puede cargar otro producto haciendo click en el botón</p>

            <Link className="btn bg-primary primary btn-newproduct" to="/admin/products/new" replace>
                Agregar otro producto
            </Link>
            <Link to="/admin" className="btn-backtopanel">Volver al panel principal</Link>
        </section>
    )
}