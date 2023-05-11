import logo from './logo.svg';
import './App.css';

import { Box, styled } from "@mui/material";
import Home from './MyComponents/home/Home';
import DetailVeiw from './MyComponents/details/DetailVeiw'
import ForMen from './MyComponents/shopnow/ForMen';
import ForWomen from './MyComponents/shopnow/ForWomen'
import Cart from './MyComponents/cart/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './MyComponents/header/Header';
import Wishlist from './MyComponents/wishlist/Wishlist';
import Checkout from './MyComponents/placedetail/Checkout'
import Profile from './MyComponents/myprofile/Profile'
import Order from './MyComponents/orders/Order';

function App() {
  return (
    <>
    <BrowserRouter>
    
        <Header/>
        <Box>
    
    
          <Routes>
    
            <Route path='/' element={<Home/>}/>
            <Route path='/product/:id' element={<DetailVeiw/>}/>
            <Route path='/men' element={<ForMen/>}/>
            <Route path='/women' element={<ForWomen/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/wishlist' element={<Wishlist/>}/>
            <Route path='/detail' element={<Checkout/>}/>
            <Route path='/account' element={<Profile/>}/>
            <Route path='/orders' element={<Order/>}/>

            
            </Routes>
        </Box>
      
     
     
        
    </BrowserRouter>
        
       
      
        </>
  );
}

export default App;
