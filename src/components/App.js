import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './AuthForms/Login';
import Register from './AuthForms/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/home/login" component={Login} />
          <Route path="/home/register" component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;