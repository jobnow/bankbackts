import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import ForgotPassword from '~/pages/ForgotPassword';
import ResetPassword from '~/pages/ResetPassword';



import Dashboard from '~/pages/Dashboard';
import Sell from '~/pages/Dashboard/Sell';
import Products from '~/pages/Dashboard/Products';
import Profile from '~/pages/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />


    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/sell" component={Sell} isPrivate />
    <Route path="/products" component={Products} isPrivate />


    <Route path="/profile" component={Profile} isPrivate />
  </Switch>
);

export default Routes;
