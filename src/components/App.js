import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Home from './Home'
import Login from './AuthForms/Login'
import SignUp from './AuthForms/SignUp'
import MainPage from './MainPage/MainPage'
import Job from './Job/Job'
import Account from './Account/Account'

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/home/login" component={Login} />
        <Route path="/home/signup" component={SignUp} />
        <PrivateRoute path="/mainpage" component={MainPage} />
        <PrivateRoute path="/account" component={Account} />
        <PrivateRoute path="/jobs/:id" component={Job} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App