import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../containers/Home'
import Navbar from '../components/navbar2/index'


const AppRouter = ()=> {
    return(
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </Router>
    )
}

export default AppRouter