import {useForm } from "react-hook-form";

//
import {create} from "../Services/productosServices"
 //

function ProductosAlta() {
    console.log(ProductosAlta)
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm ({ mode: "onChange"});

    const onSubmit = async (data) =>{
        try{
            const document = await create(data);
            console.log(document)
        }catch(e){
            console.log(e)
        }
        }

      return(
        <div>
            <h1>CREA TU PRODUCTO</h1>

            <form onSubmit={handleSubmit(onSubmit)} id="FormAltaId">

             <p>Nombre:</p>
             <input type="text"
             placeholder="Ingrese nombre del producto"
             {...register("title", {required:true})}></input>
            {errors && errors?.nombre && (
                <div>El campo es obligatorio</div>
            )}
            
            <p>Precio $</p>
             <input type="text"
             placeholder="Ingrese precio del producto"
             {...register("price")}></input>
           

            <p>imagen</p>
             <input type="url"
             placeholder="Ingrese la URL de la foto del producto"
             {...register("image", {required:true})}></input>
            {errors && errors?.nombre && (
                <div>El campo es obligatorio</div>
            )}
             <br></br>
             <br></br>
            <button type="submit" >Postear</button>

            </form>
        </div>
      )  
     // <buton /  loading={loading} autocomplete="true" //
    }
export default ProductosAlta