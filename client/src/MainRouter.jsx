import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from './core/Home';
import SignIn from "./User/SignIn";
import SignUp from "./User/SignUp";

const MainRouter = () => (
    <div>
        <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={'/signin'} component={SignIn}/>
            <Route exact path={'/signup'} component={SignUp}/>
        </Switch>
    </div>
);



export default MainRouter;