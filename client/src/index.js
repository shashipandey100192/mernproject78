import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Welcomepage from './appmodules/Welcomepage';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./appmodules/css/style.css";
import Userlogin from './appmodules/users/auth/Userlogin';
import Userregistor from './appmodules/users/auth/Userregistor';
import Mainpage from "./appmodules/dashboard/Mainpage";
import Homepage from "./appmodules/dashboard/Homepage";
import Landingpage from "./appmodules/dashboard/Landingpage";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Welcomepage/>}></Route>
        <Route path='usermanagement' element={<Userlogin/>}></Route>
         <Route path='usermanagement/registor' element={<Userregistor/>}></Route>
         <Route path='dashboard' element={<Mainpage/>}>
          <Route path='' element={<Landingpage/>}></Route>
          


         </Route>
        

      </Routes>
    </BrowserRouter>
  
  </React.StrictMode>
);

