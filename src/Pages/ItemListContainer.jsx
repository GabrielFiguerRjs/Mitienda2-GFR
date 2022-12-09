import React from "react";
import { Link } from "react-router-dom";
import Naranja from './Imagenes/Naranja.jpg';
import Frutilla from './Imagenes/Frutilla.jpg';
import Granada from './Imagenes/Granada.jpg';
import Zarzamora from './Imagenes/Zarzamora.jpg';
import Ciruela from './Imagenes/Ciruela.jpg';
//import Item from './Item/Item'

const ItemListContainer = (props) =>{

    return(
        <div style={{  background: 'beige', border: '1px solid black', 
                    margin: 2, height: 550, fontSize:40, alignSelf:'center' } }  >
                     <div style={{  background: 'beige', margin: 2, height: 50, fontSize:40, alignSelf:'center' } }> </div>
                    <div>
                    <td style={{ width:100, height: 50 }} > </td>
                    <td > <Link to='Item' ><img  src={Naranja} width="150" height="150"/></Link> </td>
                    <td style={{ width:100, height: 50 }} > </td>
                    <td><Link to='Item'><img src={Ciruela} width="150" height="150"/> </Link></td>
                    <td style={{ width:100, height: 50 }} > </td>
                    <td><Link to='Item'><img src={Frutilla} width="150" height="150"/></Link> </td>
                    <td style={{ width:100, height: 50 }} > </td>
                    <td><Link to='Item'><img src={Granada} width="150" height="150"/></Link> </td>
                    <td style={{ width:100, height: 50 }} > </td>
                    <td><Link to='Item'><img src={Zarzamora } width="150" height="150"/></Link> </td>
                    </div>
                    
                    </div>
    )
}
export default ItemListContainer;