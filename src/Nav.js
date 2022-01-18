import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Home from './Home';
import App from './App';

const Nav = ()=>{
    return (
        <>
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/app' component={App} />
            </Switch>

        </Router>
        
        </>
    )
}
export default Nav;