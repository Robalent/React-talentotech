import "./App.css";
import { Count } from "./components/Count/Count";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Route, Routes } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartView } from "./components/Cart/CartView";

function App() {
  return (
    <>
      <Header />
      <main>
        
        <Routes>

          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/product/:id" element={<ItemDetailContainer/>}/>
          <Route path="/carrito" element={<CartView/>}/>
          <Route path="/productos" element={<h1>Productos</h1>}/>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
