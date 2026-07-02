import "./App.css";
import { Count } from "./components/Count/Count";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navigate, Route, Routes } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartView } from "./components/Cart/CartView";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer";
import { ProductSuccess } from "./components/adminComponents/ProductSuccess";
import { PublicLayout } from "./layouts/PublicLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { Dashboard } from "./components/adminComponents/Dashboard/Dashboard";
import { Login } from "./components/Login/Login";
import { ProductListContainer } from "./components/adminComponents/productList/ProductListContainer";
import { ProductEditContainer } from "./components/adminComponents/productEdit/ProductEditContainer";

function App() {
  return (
    <>
        <Routes>
          {/* -----------------RUTAS PÚBLICAS----------------- */}
          <Route element={<PublicLayout/>}>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/product/:id" element={<ItemDetailContainer/>}/>
            <Route path="/carrito" element={<CartView/>}/>
            <Route path="/productos" element={<h1>Productos</h1>}/>
          </Route>

          <Route path="/admin/login" element={<Login/>}/>
          {/* <Route path="/admin/login" element={<h2>LOGIN</h2>} /> */}
          {/* ---------------------ADMIN------------------- */}
          <Route path="/admin" element={<ProtectedRoute> <AdminLayout/> </ProtectedRoute>}>
            <Route index element={<Navigate to={"dashboard"}/>} />
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="products/list" element={<ProductListContainer/>}/>
            <Route path="products/new" element={<ProductFormContainer/>}/> 
            <Route path="products/success/:id" element={<ProductSuccess/>}/>
            <Route path="products/edit/:id" element={<ProductEditContainer/>}/>
          </Route>
        </Routes>
    </>
  );
}

export default App;
