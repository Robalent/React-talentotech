import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getProductById, updateProduct } from "../../../services/productsService"
import { validateProduct } from "../../../utils/validateProduct"
import { uploadImage } from "../../../services/uploadImage"
import { ProductEditUI } from "./ProductEditUI"

export const ProductEditContainer = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [updating, setUpdating] = useState(false)
    const [errors, setErrors] = useState({})
    const [file, setFile] = useState(null)
    const [product, setProduct] = useState({
        name:"",
        price:"",
        description:"",
        image:"",
    })

    useEffect(() => {
        const loadProduct = async () => {
            try {
                const productData = await getProductById(id)
                if (productData) {
                    setProduct(productData)
                }else{
                    setErrors({general:"El producto no existe en la base de datos"})
                }
            } catch (error) {
                setErrors({general: "Error al conectar con Firebase"})
            } finally{
                setLoading(false)
            }
        }
        loadProduct()
    }, [id])

    const handleChange = (e) => {
        const {name, value} = e.target
        setProduct({...product, [name]: value})
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0] || null
        setFile(file)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors({})
        setUpdating(true)

        const newErrors = validateProduct({...product, file})

        //esto sirve para que no tire error si la persona no agrega una imagen nueva
        if (product.image && newErrors.file){
            delete newErrors.file
        }

        if (Object.keys(newErrors).length >0) {
            setErrors(newErrors)
            setUpdating(false)
            return
        }

        try {
            let imageurl = product.image
            // si la persona elige un archivo nuevo lo subimos
            if (file){
                imageurl = await uploadImage(file)
            }

            const updateData = {
                ...product,
                price: Number(product.price),
                image: imageurl
            }

            await updateProduct (id, updateData)

            navigate("/admin/products/list", {replace:true})
        } catch (error) {
            setErrors({general:error.message})
        } finally {
            setUpdating(false)
        }
    }
    if (loading) return <p>Cargando datos del producto...</p>

    return (
        <ProductEditUI
        product={product}
        errors={errors}
        loading={updating}
        onChange={handleChange}
        onFileChange={handleFileChange}
        onSubmit={handleSubmit}
        />
    )
}