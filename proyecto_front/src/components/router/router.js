import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../login/Login.jsx';
import Singup from '../singup/Singup.jsx';
import Recuperar from '../recuperar/Recuperar';
import Home from '../home/Home';

export default function AppRouter() {
    return(
        <Router>
            <Switch>
                <Route exact path={ [ '/', '/index', '/login' ] } component={ Login } />
                <Route exact path='/crear-cuenta' component={ Singup } />
                <Route exact path='/olvidaste' component={ Recuperar } />
                <Route exact path={ [ '/home/*' ] } component={ Home } />

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
