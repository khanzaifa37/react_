import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {BrowserRouter, Route,Link,NavLink,Switch } from 'react-router-dom';
import './css/App.css'
// Components
import Home from './components/home'
import TransitionComp from './components/transition';
import CSS from './components/cssTransition';
import Fade from './components/cssTransition';


const App=()=>{
    return (
        <div>
            <BrowserRouter>
                <header>
                    <NavLink to="/"><button>Home</button></NavLink>
                    <NavLink to="/transition"><button>Transition</button></NavLink>
                    <NavLink to="/css-transition"><button>CSS Transition</button></NavLink>
                    <hr/>
                </header>
                <Switch>
                    <Route path="/css-transition" component={Fade} />
                    <Route path="/transition" component={TransitionComp} />
                    <Route path="/" exact component={Home} />
                </Switch>
            </BrowserRouter>
        </div>
    )
};

ReactDOM.render(
    <App/>,document.getElementById("root")
)

    
