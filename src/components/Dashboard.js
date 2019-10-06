import React from 'react'
import Header from './Header'
import {Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom"
import App from './App';
import Info from './Info'
import Reservation from './Reservation';

const Dashboard = () => (
    <>
        <Header />
        <Router>
            <Switch>
                <Route exact path={`/panel`} component={App}/>
                <Route exact path={`/panel/movie/:filmId`} component={Info}/>
                <Route exact path={`/panel/movie/:filmId/reservation`} component={Reservation}/>
                <Redirect exact from={`/`} to={`/panel`}/>
            </Switch>
        </Router>
    </>
)

export default Dashboard