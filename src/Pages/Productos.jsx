import React from "react";
import { Link } from "react-router-dom";
//import './componentes.css';
const ItemListContainer = (props) =>{

    return(
        <div style={{  background: 'beige', margin: 2, height: 550, fontSize:22, alignSelf:'center' } }>
            <div><Link  to='/Category'>Mermeladas</Link></div>
            <div><Link>Galletas</Link></div>
            <div><Link>Caramelos</Link></div>
        </div>
    )
}
export default ItemListContainer;