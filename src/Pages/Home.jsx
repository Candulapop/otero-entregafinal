import Productos from "../components/Productos";
//para que se renderize el reurn en pantalla necesitamos "./"   //

//import Registro from "../Pages/Registro";//

import firebase from "../config/firebase";

function Home (){
    console.log(Home)
    console.log(firebase)
    return(
        <div>
              <h1>cCOMPO HOME</h1>

              <Productos />
              
             
        </div>
    )
}
export default Home