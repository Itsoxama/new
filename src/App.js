
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import React from 'react';
import Home from './Components/Home/Home';
import { useEffect, useState } from 'react';
import Emp from './Components/Employee/Emp';
import Login from './Login';
function App() {
  const [footer, setfooter] = useState("footer")


  return (
    <>




<BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/user' element={<Emp />} />
          <Route exact path='/login' element={<Login />} />


        </Routes>
      </BrowserRouter>




    </>
  );
}

export default App;
