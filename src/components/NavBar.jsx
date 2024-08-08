import "./NavBar.css";
//
import { Link } from "react-router-dom";

//<h4><b>compo NavBar</b></h4>//

function NavBar(){
    console.log(NavBar)
//

 return(
    <div>
        

        <ul className="UlNavBar">
            <li className="LiNavBar"><Link className="PequeñoNavbar" to={"/"}>Inicio</Link></li>
            <li className="LiNavBar"><Link className="PequeñoNavbar" to={"/Productos"}>productos</Link></li>
            <li className="LiNavBar"><Link className="PequeñoNavbar" to={"/Login"}>Login</Link></li>
            <li className="LiNavBar"><Link className="PequeñoNavbar" to={"/Registro"}>Registro</Link></li>
            <li className="LiNavBar"><Link className="PequeñoNavbar" to={"/Alta"}>Alta</Link></li>

        </ul>
        <br></br>
    </div>
 );
}export default NavBar