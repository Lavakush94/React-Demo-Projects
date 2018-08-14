import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink, Redirect, Prompt} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const User = (params) => {
  return (<h1>Welcome {params.username}</h1>)
}

class App extends Component {
  state = {
    loggedIn : false,
  }

  loginHandle = () => {
    this.setState(prevState =>({
      loggedIn : !prevState.loggedIn
    }));
  }

  render() {
    return (
      <Router>
        <div className = "App">
          <NavLink to = "/" exact activeStyle = {{color: 'green'}}>Home </NavLink> <br />
          <NavLink to = "/about" exact activeStyle = {{color: 'green'}} > about </NavLink> <br />
          <NavLink to = "/user/john" exact activeStyle = {{color: 'green'}} > user john</NavLink> <br />
          <NavLink to = "/user/peter" exact activeStyle = {{color: 'green'}}> user peter </NavLink> <br /> <br />

          <button type = 'button' style = {{backgroundColor : 'blue'}}  onClick = {this.loginHandle.bind(this)}>
            {this.state.loggedIn ? 'logout' : 'login'}
          </button>
          <Route path = "/" exact render = {
            () => {
              return (<h1> Home page </h1>)
            }
          } />

          <Prompt
            when = {!this.state.loggedIn}
            message = {(location) => {
              return location.pathname.startsWith('/user') ? 'Are you sure' : true;
            }}

          />

          <Route path = "/about" exact render = {
            () => {
              return (<h1> About page </h1>)
            }
          } />

           <Route path = "/user/:username" exact render = { ({match}) => {
             return(
                 this.state.loggedIn ? (<User username = {match.params.username}/>) : (<Redirect to = '/' />) 
             );
           }
          } />



        </div>
      </Router>
    );
  }
}

export default App;
