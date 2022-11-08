import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from '../login/Login';
import { Singup } from '../singup/Singup';
import { Recuperar } from '../recuperar/Recuperar';

export default function AppRoutes() {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Login/>} /> 
                <Route exact path="/index" element={<Login/>} /> 
                <Route exact path="/login" element={<Login/>} /> 
                <Route path='/crear-cuenta' element={<Singup />} />
                <Route path='/olvidaste' element={<Recuperar />} />

                <Route path='*' element = {(
                    <h1 style={{marginTop:300}}>404 <br/>Página no encontrada</h1>
                )} />
            </Routes>
        </Router>
    )
}