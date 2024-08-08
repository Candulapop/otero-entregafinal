import { useParams } from "react-router-dom";
import { getProductosById,getDescriptionById } from "../Services/productosServices";

import { useState, useEffect } from "react";

import "./Detalle.css";

function Detalle (){

  console.log(Detalle)
 
const { id } = useParams();
const [ producto, setProducto] = useState([]);
const [ loading, setLoading] = useState(true);
 

   const CompraGracias = () => {
     console.log(" gracias por comprar")
   }


   useEffect(() => {
    const request = async () => {
      try{
        const response = await getProductosById(id);
        console.log(response)
        const descriptionResponse = await getDescriptionById(id);
        console.log(descriptionResponse)

        

        setProducto({...response, description : descriptionResponse.plain_text});
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
request()
   }, [id]);
//cuando el Service retorna, por ej: data, no se le agrega a setProducto lo mismo porque ya está//


   if(loading){
    return <div>Cargando</div>;
} else {
    const { title, price, pictures, description, } = producto;
    return(
        <div>
             

             <h3>{title}</h3>
             <p><b>${price}</b></p>
             
          
             <p>{description}</p>
             <br></br>
             <div >
              {pictures.map(picture=><img className="ImgDetalle"
              key={picture.id}
              src={picture.secure_url} alt="" /> )}
             </div>
             
             
            <button className="DetBotonComprar" onClick={CompraGracias}>comprar</button>

        </div>
    )
} 
 } export default Detalle

//IMPORTANTE!!//

//FALTA SKU Y DESCRIPTION//




//  https://api.mercadolibre.com/sites/MLA/search?q=clothes #json //
