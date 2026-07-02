import {useAuth} from "../../context/AuthContext"
import { signOut } from "firebase/auth"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { auth } from "../../firebase/config"
import "./Login.css"

export const Login = () => {
    const {login} = useAuth()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email:"",
        password:"",
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData ({...formData, [name]: value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
            await login (formData.email, formData.password)
            console.log("Login exitoso")
            navigate("/admin", {replace:true})
        } catch (error) {
            console.error(error)
            alert("Error al iniciar sesión")
        }
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2 className="pixelify-sans-uniquifier">INICIAR SESIÓN</h2>

                <div className="input-group">
                    {/* <label htmlFor="">Email</label> */}
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                </div>

                <div className="input-group">
                    {/* <label htmlFor="">Constraseña</label> */}
                    <input type="password" name="password" placeholder="password" value={formData.password} onChange={handleChange} />
                </div>

                <button type="submit" className="btn-login">Ingresar</button>
            </form>
        </div>
    )
}