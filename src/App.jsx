import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//import BarraNav from './Components/BarraNav';
import NavBar from './Components/NavBar';
import ItemListContainer from './Pages/ItemListContainer';
import Productos from './Pages/Productos';
import Item from './Pages/Item';
function App() {
  return ( 
    <BrowserRouter>
         <NavBar/>
      <Routes>
        <Route exact path='/'  element={<ItemListContainer/>} />
        <Route exact path='/Category'  element={<ItemListContainer/>} />
        <Route exact path='/Productos' element={<Productos/>} />
        <Route exact path='/Category/Item'  element={<Item/>} />
      </Routes>
    

         

     

    </BrowserRouter>
  );
}

export default App;
