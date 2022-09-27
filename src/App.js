import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Signin" element={<Signin/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/error" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
