export const validateProduct = (product) => {
    const errors = {}

    if (!product.name.trim()) {
        errors.name = "El nombre es obligatorio"
    }

    if (!product.price || product.price <=0) {
        errors.price = "El precio debe ser mayor a 0"
    }

    if (!product.description.trim()) {
        errors.description = "La descripción es obligatorio"
    }

     if (!product.file()) {
        errors.file = "Debe seleccionar una imagen"
    }

    return errors
}