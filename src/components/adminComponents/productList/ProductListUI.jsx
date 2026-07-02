import { Link } from "react-router-dom"
import "./ProductList.css"

export const ProductListUI = ({ products, onEdit, onDelete }) => {
    return (
        <div className="list-container">
            <h1 className="pixelify-sans-uniquifier">LISTA DE PRODUCTOS</h1>

            <div className="list-action-header">
                <Link to="/admin" className="btn-backtopanel">Volver al panel principal</Link>
            </div>


             {/* TABLA DE PRODUCTOS */}
            <table className="products-table">
                <thead>
                    <tr className="table-header-row">
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th className="text-center">Imagen</th>
                        <th className="text-center">Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((p) => (
                        <tr key={p.id} className="table-product-row">
                            <td className="product-name">{p.name}</td>
                            <td className="product-price">{p.price}</td>
                            <td className="text-center">
                                <img src={p.image} alt={p.name} className="product-img"/>
                            </td>
                            <td className="text-center">
                                <div className="actions-cell-container"> 
                                    <button onClick={() => onEdit(p.id)} className="btn-edit-product">Modificar</button>
                                    <button onClick={() => onDelete(p.id)} className="btn-delete-product">Eliminar</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>



        </div>

        
        
    )
}