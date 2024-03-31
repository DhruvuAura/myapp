import React from "react";
import BasicFrom from "./Login/login";
import RegistrationForm from "./Login/Registration"
import Page from "./page/page";
import Background from "./backround/background";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/page" element={<Page/>}/>
            <Route path="/background" element={<Background/>}/>
            <Route path="/login" element={<BasicFrom/>}/>  
            <Route path="/registrationform" element={<RegistrationForm/>}/>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
