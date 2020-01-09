import React, { Component } from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import login from './Component/login'
import register from './Component/register'
import forgetPassword from './Component/forgetPassword'
export class App extends Component {
  render() {
    return (
    <Router>
      <Switch>
        <Route path='/login' component={login}></Route>
        <Route path='/register' component={register}></Route>
        <Route path='/forgetPassword' component={forgetPassword}></Route>
      </Switch>
    </Router>
    )
  }
}

export default App;
