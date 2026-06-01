import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/config";

//todas las funciones van a utilizar esta colección
//la hacemos global y que todas la usen en vez de definirla varias veces 
//creamos la referencia a la colección (products en este caso)

const productsRef = collection(db, "products") // products sería el nombre de la colección

/*----------------------------------------------------------------- */
/*                     TRAER PRODUCTOS                              */
/*----------------------------------------------------------------- */
export const getProducts = async() => {
    try {
        const snapshot = await getDocs(productsRef)
        
        const productsFormat = snapshot.docs.map((doc) => {
            return{id: doc.id, ...doc.data()}
        })
        return productsFormat;
    }   
    catch(err){
        console.error("Error al traer productos", error)
        return[]
    }

}

/*----------------------------------------------------------------- */
/*                     TRAER PRODUCTO POR ID                        */
/*----------------------------------------------------------------- */
// Función que solo pide un dato
export const getProductById = async(id) => {
    try{
         //creamos la referencia al documento
        const productRef = doc(db, "products", id)

        //traemos el documento 
        const snapshot = await getDoc(productRef)

        //verificamos si existe
        if (snapshot.exists()){
            const product = {id: snapshot.id, ...snapshot.data()};
            console.log ("Doc:", product)
            return product
        }else{
            return null
        }
    } catch (error) {
        console.error ("Error al traer producto por ID:", error)
        return null
    }
}