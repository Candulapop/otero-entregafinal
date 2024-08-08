import { Link } from "react-router-dom";

import "./Producto.css"

function Producto( {id, title, price, thumbnail,condition } ){
    console.log(Producto)
return(
    <div className="ContenedorProductos">
     
<br></br>
       <b className="ConditionProducto">{condition}!</b>
       <h2 className="TitleProducto">{title}</h2>
       <p className="PriceProducto">${price}</p>
       <br></br>
   
    <div>
         <img src={thumbnail} alt=""></img>
    </div>
    <br></br>
       <button className="DetalleProducto"><Link to={`/producto/${id}`} className="ElVerDetalle">ver DETALLE</Link></button>
    </div>
)
} export default Producto

//IMPORTANTE!!//

//FALTA SKU Y DESCRIPTION//