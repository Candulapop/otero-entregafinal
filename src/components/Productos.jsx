import { useState, useEffect } from "react";
import Producto from "./Producto.jsx"
import { getProductos } from "../Services/productosServices.js";

function Productos(){
    console.log(Productos)

const [productos, setProductos] = useState([])   
const [loading, setLoading] = useState(true)


useEffect(() => {
    const request = async () => {
    try{
            const data = await getProductos();
            setProductos(data);
            setLoading(false);
    } catch(error){
        console.log(error);
    }
}; 

    request();
}, []);





if(loading){
    return <div>Cargando</div>;
} else {
    return (
        <div>
        {productos.map((producto) => (
        <Producto
        key={producto.id}
        id={producto.id}
        condition={producto.condition}
        title={producto.title}
        price={producto.price}
        thumbnail={producto.thumbnail}
        
        />
        ))}





                </div>
            );
         }






            
        
 
}export default Productos


//mi proy firebase: otero-entregafinal-firebase


//IMPORTANTE!!//

//FALTA SKU Y DESCRIPTION//

/*.then((res)=> res.json())
.then((data) => {
setProductos(data.results)
setLoading(false)
 } )
.catch((error)=>{
  console.log(error)
})*/