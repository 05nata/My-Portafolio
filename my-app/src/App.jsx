import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import MyProjects from './components/pages/MyProjects';
import NotFound from "./components/pages/NotFound";

/**
 * App component
 * @returns {JSX.Element}
 */
export const App = () => (
   <BrowserRouter>
   <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/about' element={<About />} />
       <Route path='/Projects' element={<MyProjects />} />
       <Route path='*' element={<NotFound />} />
   </Routes>
   </BrowserRouter> 
);

export default App;