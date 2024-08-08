import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { create } from "../Services/authServices";
import { useState } from "react";


function Registro (){
  console.log(Registro)

  const [loading, setLoading]= useState(false);
  

const onSubmit = async (data) =>{
  setLoading(true) 
    try{
      
        const responseUser = await create(data);
        setLoading(false)
        console.log(responseUser);
    }catch(e){
      return e
       // console.log(e)//
    }
};
   
const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm ({node: "onChange"});

return(
    <div>
       
       <legend>
        <h2 >¡REGISTRATE!</h2>
</legend>

<br></br>

<Form onSubmit={handleSubmit(onSubmit)}>



      <Form.Group className="mb-3" controlId="formBasicName" autocomplete="true">
        <Form.Label>Pon tu nombre</Form.Label>
        <Form.Control
        type="text"
        placeholder="Pon tu nombre"
        {...register("name")}
           />
      
</Form.Group>


<Form.Group className="mb-3" controlId="formBasicLastName" autocomplete="true">
        <Form.Label>pon tu ultino nombre</Form.Label>
        <Form.Control 
        type="text"
        placeholder="pon tu seguindo nombre"
        {...register("lastname")}
        />
</Form.Group>
    


<Form.Group className="mb-3" controlId="formBasicEmail" autocomplete="true">
        <Form.Label>pon tu Mail</Form.Label>
        <Form.Control 
        type="email"
        placeholder="pon tu e-mail"
        {...register("email")}
        />
        
    


{errors?.correo?.type==='required' && (
    <Form.Text className="text-danger">
      *campo OBLIGATORIO*
    </Form.Text>
)}

</Form.Group>
 
 
<Form.Group className="mb-3" controlId="formBasicPassword" autocomplete="true" >
        <Form.Label>pon tu Password</Form.Label>
        <Form.Control 
        type="password"
        placeholder="pon tu contraseña"
        {...register("password")}
        />







 {errors?.clave?.type==='required' && (
  <Form.Text className="text-danger">
campo OBLIGATORIO
  </Form.Text>
 )}
 
 </Form.Group>


      <Button variant="primary" loading={loading} autocomplete="true" type="submit">
        ¡REGISTRARSE!
      </Button>

    </Form>


    </div>
)
}export default Registro