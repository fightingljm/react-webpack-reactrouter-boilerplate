import React from 'react';
import { Router,Route,browserHistory,IndexRoute } from 'react-router';

import App from './App.js'
import Home from './components/Home.js'
import Blog from './components/Blog.js'

export default function () {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='blog' component={Blog}/>
      </Route>
    </Router>
  )
}
