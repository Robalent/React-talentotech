import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { deleteProduct, getProducts } from "../../../services/productsService"
import { ProductListUI } from "./ProductListUI"

export const ProductListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const navigate = useNavigate()


    useEffect(() =>{
        const fetchProducts = async () => {
            try {
                const data = await getProducts()
                setProducts(data)
            } catch (error) {
                setError(true)
            }finally{
                setLoading(false)
            }
        }
        fetchProducts()
    }, [])

    const handleEdit = (id) =>{
        navigate(`/admin/products/edit/${id}`)
    }

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("¿Seguro que querés eliminar este producto?")
        if (!confirmDelete) return

        try {
            //borramos el producto de firebase
            await deleteProduct(id)

            setProducts(products.filter((p) => p.id !== id))
        } catch (error) {
            alert("No se pudo eliminar el producto de la base de datos")
        }
    }
    if (loading) return <p>Cargando productos...</p>
    if (error) return <p>Error al cargar los productos</p>


    return (
        <ProductListUI
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
        />
    )
}