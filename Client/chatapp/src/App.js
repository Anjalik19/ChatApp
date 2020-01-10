import React, { Component } from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Component/login'
import Register from './Component/register'
import ForgetPassword from './Component/forgetPassword'
export class App extends Component {
  render() {
    return (
    <Router>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
        <Route path='/forgetPassword' component={ForgetPassword}></Route>
      </Switch>
    </Router>
    )
  }
}

export default App;
