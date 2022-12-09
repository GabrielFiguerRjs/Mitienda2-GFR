import { Link } from "react-router-dom";
import React from "react";
import CartWidget from './Cartwidgt/CartWidget'

function NavBar(){
    let CompanyName = 'Dulce Vida';
return(
    <ul  style={{  background: 'beige', margin: 2, height: 100, fontSize:18, alignSelf:'center' } }>
        <td style={{ width:100, fontSize:15, color:'red' }}>
       <h2>{CompanyName}</h2></td>
       <td><Link to='/'><li>Home</li></Link> 
       <Link to='/Category'><li>Categorias</li></Link> 
       <Link to='/Productos'><li>Productos</li></Link> </td>
       <td style={{ width:1200}}></td>
       <td style={{ width:100, fontSize:15 }}>< CartWidget style={{fontSize:10}} />(3)</td>
    </ul>
)

}
export default NavBar;