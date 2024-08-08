import Home from "./Pages/Home.jsx";
import Detalle from "./Pages/Detalle.jsx";
import NavBar from "./components/NavBar.jsx";
import Login from "./Pages/Login.jsx";
import Registro from "./Pages/Registro.jsx";
import NotFound from "./Pages/NotFound.jsx";
import ProductosAlta from "./Pages/ProductosAlta.jsx";

//
import AuthProvider from "./Context/AuthContext.jsx";

//
import  "./App.css";

import Productos from "./components/Productos.jsx";

import {Route, Routes, BrowserRouter as Router} from "react-router-dom"


function App() {
  
  

  return (
    
    <>
         
      <h1 className="App">E-commerce-clothes</h1>
      
     
      <Router>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Registro" element={<Registro />} />
          <Route path="Productos" element={<Productos />} />
          <Route path="producto/:id" element={<Detalle />} />
          <Route path="/Alta" element={<ProductosAlta />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
        </AuthProvider>
      </Router>
      
     

     
    
    </>

  )
 
}

export default App
