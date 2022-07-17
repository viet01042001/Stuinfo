import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from './About';
import InfoStudent from './InfoStudent';
import Contact from './Contact';

function MainPage() {
  return (
    <div>

      <BrowserRouter>
    
        <Routes>
          
          <Route>
            <Route index path="/" element={<About/>} />
            <Route path="/infostudent" element={<InfoStudent/>} />
            <Route path="/contact" element={<Contact/>} />
          </Route>
          
        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}

export default MainPage;