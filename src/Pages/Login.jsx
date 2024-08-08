
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { autenticate } from "../Services/authServices";

import { useState } from "react";

import { useAuthContext } from "../Context/AuthContext";



///

function Login (){
  console.log(Login)
   ///
   const [loading, setLoading] = useState(false);

  
 /* const [ alertNavigation, setAlertNavigation] = useState({
    message:"",
    variant:""
  })*/

    

    const { handleLogin } = useAuthContext();

 
///


   const onSubmit = async (data) => {
    setLoading(true)  
    try{
         
         console.log(data);

         const token = await autenticate(data.email, data.password);
         setLoading(false)
         console.log(token)

        /*setAlertNavigation({
          message:"Bienvenido",
          variant:"excito",
          duration:2000,
          link:"/"
        })
*/
       /*  this.handleLogin = ()=>{
         return token
         }*/
         //const responseUser = await autenticate(data.email,data.password);//
         
          
        }
      
   catch(e){
      console.log(e)
      setLoading(false)
   }
}

const {
   register,
handleSubmit,
formState: {errors},
} = useForm({ mode: "onChange"});

if(loading){
  return <div>Cargando</div>
} else {
    return(
      <div>
       <Form onSubmit={handleSubmit(onSubmit)} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Pon tu e-mail aquí</Form.Label>
        <Form.Control
        autoComplete="true"
        type="email"
        placeholder="Enter email"
        {...register("email",
         {required:true,
        })}
           />
       {errors?.correo?.type === "required" &&(
      <Form.Text className="text-danger">
        *CAMPO OBLIGATORIO*
      </Form.Text>
       )}
      </Form.Group>




      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>pon tu contra</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Password" 
        autoComplete="true"
        {...register("password",
        {required:true,
        minLength:3,
        maxLength:7})}
        />
        {errors?.clave?.type === "required" && (
            <Form.Text className="text-muted">
                *El campito es OBLIGATORIO
            </Form.Text>
        )}




</Form.Group>


      <Button variant="primary" type="submit" onClick={handleLogin}>
        inicio de sesion
      </Button>
    </Form>

       
       </div>
    );
}}
export default Login


// 12Celia1234568545 //

//Tita contra:   12345698   //