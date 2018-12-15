import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, NavLink} from 'react-router-dom';

//Components

import Home from './components/home'
import Profile from './components/profiles'
import Posts from './components/posts'
import PostItem from './components/post_item'

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <NavLink to="/">Home</NavLink><br/>
                    <NavLink 
                        to="/posts"
                        activeStyle={{color:'red'}}>
                        Posts
                    </NavLink><br/>
                    <NavLink to={{
                        pathname: '/profiles',
                    }}>Profile</NavLink><br/>
                    <hr/>
                </header>
                <Route path="/" exact component={Home} />
                <Route path="/posts" exact component={Posts} />
                <Route path="/posts/:id" component={PostItem} />
                <Route path="/profiles" component={Profile} />
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render( 
    <App />,
    document.querySelector('#root')
)