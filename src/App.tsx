import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { connect } from 'react-redux';

import PrivateRouteComponent from './components/PrivateRoute/PrivateRouteComponent';
import LoginComponent from './components/LoginComponent/LoginComponent'
import HomeComponent from './components/HomeComponent/HomeComponent'


import './App.css';

function App(props) {
  
  const { isAuthenticated } = props;

  return (
    
    <div className="App">
      <Switch>
        <Route path='/login' exact component={LoginComponent} />
        <PrivateRouteComponent isAuthenticated={isAuthenticated} path='/'  exact component={HomeComponent} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

function mapStateToProps(state){
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
}

export default connect(mapStateToProps)(App);
