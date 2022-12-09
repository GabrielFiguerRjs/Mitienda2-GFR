

//import Container from 'react-bootstrap/Container';
//import Navbar from 'react-bootstrap/Navbar';

import React from 'react';
import { link } from 'react-router-dom';
import CartWidget from './Cartwidgt/CartWidget'

const BarraNav = () => {
   let CompanyName = 'Antigüedades Casilda';
    return (
        <div   style={{  background: 'LightBlue', border: '1px solid black', margin: 2 }}  >
         <td style={{ width:100, alignSelf:'left' }}> {CompanyName}</td>
         <td style={{ width:1000, alignSelf:'left' }}> </td>
         <td style={{ width:100 }}><span> Home</span></td>
          <td style={{ width:100 }}>Productos</td>
          <Link><li>Home</li></Link> 
     
          <td style={{ width:100, fontSize:15 }}>< CartWidget style={{fontSize:10}} />(3)</td>
           
          
        
        </div>
        
        
      );
}
export default BarraNav;