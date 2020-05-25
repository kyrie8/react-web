import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'



class App extends Component{
  render() {
    return (
      <Router>
      <Switch>
        <Route path='/login' exact component={Login}></Route>
        <Route path='/'  component={Admin}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
