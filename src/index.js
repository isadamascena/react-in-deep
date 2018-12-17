import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';

//Components

import Home from './components/home'
import Profile from './components/profiles'
import Posts from './components/posts'
import Life from './components/life'
import PostItem from './components/post_item'
import Conditional from './components/conditional'

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
                    <NavLink to="/life">Life</NavLink><br/>
                    <NavLink to="/conditional">Conditional</NavLink><br/>
                    <hr/>
                </header>
                <Switch>
                    <Route path="/posts/:id" component={PostItem} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/life" component={Life} />
                    <Route path="/conditional" component={Conditional} />
                    <Route path="/profiles" component={Profile} />
                    <Route path="/" exact component={Home} />
                    <Route render={()=> <h3>oops 404</h3>} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render( 
    <App />,
    document.querySelector('#root')
)