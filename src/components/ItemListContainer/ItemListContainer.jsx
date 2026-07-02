import "../ItemListContainer/ItemListContainer.css"
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { getProducts } from "../../services/productsService";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  //CON LA API FAKESTORE
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data))
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, []);

  //CON LA API DUMMYJSON (OJO con respuesta en objeto. Atributo de imagen en array)
  // useEffect(() => {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data.products)) //dummyjson devuelve un objeto con clave products que tiene el array
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, []);

  //Con el JSON LOCAL
  useEffect(() => {
    setLoading(true);

    getProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.log("Hubo un error:", err))
      .finally(() => setLoading(false));
  }, []);

  console.log(products);


  if (loading) return <p>Cargando...</p>;

  return (
    <section>

      <div>
        <h1 className="geist-pixel-uniquifier">¡Bienvenid@ a supernatural.fm !</h1>
        <p className="hero-text">Si la música forma parte de tu vida, estás en el lugar indicado!. Explorá nuestra colección de vinilos, CDs y cassettes de tus artistas favoritos y descubrí nuevas joyitas...</p>
        <div className="vinilo-hero">
          <img src="/public/img/vinilo.png" alt="" className="vinilo"/>
        </div>
      </div>

      <h1 className="pixelify-sans-uniquifier" id="products">Nuestros  Productos</h1> 

      <ItemList products={products} />
    </section>
  )
};
