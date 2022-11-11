import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../auth/privaterouter';

import Login from '../login/Login';
import Singup  from '../singup/Singup';
import Recuperar from '../recuperar/Recuperar';



export default function AppRouter() {
    return(
        <Router>
            <Switch>
                <Route exact path={ [ '/', '/index', '/login' ] } component={ Login } />
                <Route exact path='/crear-cuenta' component={ Singup } />
                <Route exact path='/olvidaste' component={ Recuperar } />
                <PrivateRoute exact path={ [ '/home' ] } component={ Home } />

                <Route path={ "*" } component={ () => (
                    <h1 className='text' style={{ marginTop: 20 }}>
                        404
                        <br/>
                        Página no encontrada
                    </h1>
                ) } />
            </Switch>
        </Router>
    )
}

function Home() {
    return <h2>Home</h2>;
}