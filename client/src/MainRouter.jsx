import React from "react";
import {Route, Switch} from "react-router-dom";
import Index from './core/Home';
import SignIn from "./User/SignIn";
import SignUp from "./User/SignUp";
import Main from "./BTS/Main";
import PrivateRoute from "./auth/PrivateRoute";

const MainRouter = () => (
    <div>
        <Switch>
            <Route exact path={'/'} component={Index}/>
            <Route exact path={'/home'} component={Index}/>
            <Route exact path={'/signin'} component={SignIn}/>
            <Route exact path={'/signup'} component={SignUp}/>
            <PrivateRoute exact path={'/user/:userId/dashboard'} component={Main}/>
            <PrivateRoute exact path={'/user/:userId/products'} component={Main}/>
            <PrivateRoute exact path={'/user/:userId/products/:productId'} component={Main}/>
            <PrivateRoute exact path={'/user/:userId/history'} component={Main}/>
            <PrivateRoute exact path={'/user/:userId/messages'} component={Main}/>
            <PrivateRoute exact path={'/user/:userId/profile'} component={Main}/>
            <PrivateRoute exact path={'/user/:userId/setting'} component={Main}/>
        </Switch>
    </div>
);



export default MainRouter;