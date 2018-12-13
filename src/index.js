import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

//Components

import Home from './components/home'
import Profile from './components/profiles'
import Posts from './components/posts'

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <header>
                    Header
                </header>
                <Route path="/" exact component={Home} />
                <Route path="/posts" component={Posts} />
                <Route path="/profiles" component={Profile} />
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render( 
    <App />,
    document.querySelector('#root')
)