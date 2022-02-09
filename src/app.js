import React from "react";
import { Routes, Route } from "react-router-dom";

//Import components
import Dashboard from './Components/Dashboard/dashboard';
import Server from './Components/Server/server'
import Application from './Components/Application/application'

const App =()=>{
    return(
        
        <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/server" element={<Server/>} />
            <Route path="/application" element={<Application/>} />
        </Routes>
        
    )
}

export default App