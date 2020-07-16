import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {BrowserRouter, Route,Link,NavLink,Switch } from 'react-router-dom';
// Components
import Home from './components/home';
import Post from './components/posts';
import PostItem from './components/post_item';
import Profile from './components/profiles';
import Life from './components/life';
import User from './components/user';

const App=()=>{
    return (
        <div>
            <BrowserRouter>
                <header>
                    <NavLink to="/">Home</NavLink><br/>
                    <NavLink to="/posts"
                    activeStyle={{color:'red'}}
                    activeClassName="selected"
                    exact
                    >Posts</NavLink><br/>
                    <NavLink to={{pathname: '/profile'}}>Profile</NavLink><br />
                    <NavLink to="/life">Life</NavLink><br/>
                    <NavLink to="/user">User</NavLink><br/>
                    <hr/>
                </header>
                <Switch>
                    <Route path="/posts/:id/:username" component={PostItem} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/posts" exact component={Post} />
                    <Route path="/life" exact component={Life} />
                    <Route path="/user" exact component={User} />
                    <Route path="/" exact component={Home} />
                </Switch>
            </BrowserRouter>
        </div>
    )
};

ReactDOM.render(
    <App/>,document.getElementById("root")
)

    
