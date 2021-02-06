import React from 'react';
import './App.css';
import Dashboard from './secure/dashboard/Dashboard';
import Users from './secure/users/Users';
import Login from './public/Login';
import { BrowserRouter, Route } from 'react-router-dom';
import Register from './public/Register';
import RedirectToDashboard from './secure/RedirectToDashboard';
import UserCreate from './secure/users/UserCreate';

function App() {
  return (
    <div className="App">
      {/* Navigation component */}

      <BrowserRouter>
        <Route path={'/'} exact component={RedirectToDashboard} />
        <Route path={'/dashboard'} exact component={Dashboard} />
        <Route path={'/users'} exact component={Users} />
        <Route path={'/users/create'} component={UserCreate} />
        <Route path={'/login'} component={Login} />
        <Route path={'/register'} component={Register} />
      </BrowserRouter>

    </div>
  );
}

export default App;
