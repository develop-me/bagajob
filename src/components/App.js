import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Login from './AuthForms/Login'
import SignUp from './AuthForms/SignUp'
import MainPage from './MainPage/MainPage'
import JobForm from './JobForms/JobForm'
import Job from './Job/Job'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/home/login" component={Login} />
          <Route path="/home/signup" component={SignUp} />
          <Route path="/mainpage" component={MainPage} />
          <Route path="/addjob" component={JobForm} />
          <Route path="/jobs/:id" render={({ match }) => (
            <Job jobId={match.params.id} />
          )} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App