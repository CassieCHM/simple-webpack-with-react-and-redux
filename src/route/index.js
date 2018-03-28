import React, {Component} from 'react'
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'
import Index from 'SRC/containers/Index/index'
import Home from 'SRC/containers/Home/index'

const AppRouter = () => (
    <Router>
        <div>
            <Route exact path="/" component={Index} />
            <Route path="/Home" component={Home} />
        </div>
    </Router>
)

export default AppRouter