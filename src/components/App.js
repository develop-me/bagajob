import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Home from './Home'
import Login from './AuthForms/Login'
import SignUp from './AuthForms/SignUp'
import Logout from './AuthForms/Logout'
import ForgotPassword from './AuthForms/ForgotPassword'
import PasswordReset from './AuthForms/PasswordReset'
import MainPage from './MainPage/MainPage'
import Job from './Job/Job'
import Account from './Account/Account'
import FourOhFour from './FourOhFour'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/home/login" component={Login} />
      <Route exact path="/home/signup" component={SignUp} />
      <Route exact path="/home/logout" component={Logout} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/password-reset/:token" component={PasswordReset} />
      <PrivateRoute path="/mainpage" component={MainPage} />
      <PrivateRoute path="/jobs/:id" component={Job} />
      <PrivateRoute path="/account" component={Account} />
      <Route component={FourOhFour} />
    </Switch>
  </BrowserRouter>
)

export default App