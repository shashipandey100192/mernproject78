import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Welcomepage from './appmodules/Welcomepage';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./appmodules/css/style.css";
import Userlogin from './appmodules/users/auth/Userlogin';
import Userregistor from './appmodules/users/auth/Userregistor';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Welcomepage/>}></Route>
        <Route path='usermanagement' element={<Userlogin/>}></Route>
         <Route path='usermanagement/registor' element={<Userregistor/>}></Route>
        

      </Routes>
    </BrowserRouter>
  
  </React.StrictMode>
);

