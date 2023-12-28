import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import Navbar from './Component/Navbar';
import Detail from './Component/Detail';
import Browse from './pages/Browse';
import BrowserByGenre from './pages/BrowseByGenre';






function App() {
  return (
 <>
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path='/' element={<HomeScreen/>}></Route>
  <Route path='/browse/:platform' element={<Browse/>}></Route>
  <Route path='/browse/:platform/:genreid' element={<BrowserByGenre/>}></Route>
 </Routes>
 <Detail/>
 </BrowserRouter>

 </>
  )
}

export default App;
