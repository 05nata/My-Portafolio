import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import MyProjects from './components/pages/MyProjects';

/**
 * App component
 * @returns {JSX.Element}
 */
export const App = () => (
   <BrowserRouter>
   <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/about' element={<About />} />
       <Route path='/Projects/:id' element={<MyProjects />} />
   </Routes>
   </BrowserRouter> 
);

export default App;