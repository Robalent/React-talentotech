import { Link } from "react-router-dom"
import "./ProductEdit.css"

export const ProductEditUI = ({product, errors, loading, onChange,onFileChange, onSubmit}) => {
  return(
    <section className="section-form">
        <form className="product-form" onSubmit={onSubmit}>
            <h2 className="pixelify-sans-uniquifier">Editar producto</h2>

            <div>
                <label>Nombre: </label>
                <input type="text" name="name" value={product.name} onChange={onChange} placeholder="Nombre del producto"/>
                {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div>
                <label>Precio: </label>
                <input type="number" name="price" value={product.price} onChange={onChange} min="0" placeholder="Precio del producto"/>
                {errors.price && <p className="error">{errors.price}</p>}
            </div>

            <div>
                <label>Descripción: </label>
                <textarea name="description" value={product.description} onChange={onChange} placeholder="Descripción del producto"/>
                {errors.description && <p className="error">{errors.description}</p>}
            </div>

            {(product.image || product.imagen) && (
                <div className="image-preview">
                    <p>Imagen actual:</p>
                    <img src={product.image || product.imagen} alt={product.name} className="product-img" />
                </div>
            )}
            <div>
                <label>Cambiar imagen (Dejar vacío para mantener la actual): </label>
                <input type="file" accept="image/*" onChange={onFileChange} />
                {errors.file && <p className="error">{errors.file}</p>}
            </div>

            <button className="btn-save" type="submit" disabled={loading}> {loading ? "Actualizando...":"Guardar cambios"}</button>
            {errors.general && <p className="error">{errors.general}</p>}

        </form>

        {/* <button className="btn-backtopanel" >Volver al panel principal</button> */}
        <Link to="/admin/products/list" className="btn-backtopanel">Cancelar y volver</Link>
    </section>
  ) 
}