import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../../context/AuthContext"
import "./Dashboard.css"

export const Dashboard = () => {
    const {logout} = useAuth()
    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h2 className="pixelify-sans-uniquifier dash-title">Panel de administración</h2>

                <div>
                    <Link to="/" className="btn-backshop">Volver a la tienda</Link>

                    <button onClick={logout} className="btn-logout">Cerrar Sesión</button>
                </div>
            </header>

            <section className="board-section">
                <h3>Acciones rápidas</h3>

                <div className="board-actions">
                    <Link to="/admin/products/new" className="btn-dash"><i className="fa-solid fa-plus"> </i> Agregar nuevo producto</Link>

                    <Link to="/admin/products/list" className="btn-dash"><i className="fa-solid fa-list"> </i>Listado de productos</Link>
                </div>

            </section>

            <section className="help-section">
                <h3><i className="fa-solid fa-circle-info help-icon"></i>Ayuda</h3>
                <p className="dashboard-info">Utilizá este panel para administrar el catálogo de la tienda.
Los cambios realizados se reflejarán automáticamente en la tienda.</p>
            </section>
        </div>
    )
}