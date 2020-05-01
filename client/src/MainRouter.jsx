import React from "react";
import {Route, Switch} from "react-router-dom";
import Index from './core/Home';
import SignIn from "./User/SignIn";
import SignUp from "./User/SignUp";
import DashBoard from "./BTS/DashBoard";
import Main from "./BTS/Main";

const MainRouter = () => (
    <div>
        <Switch>
            <Route exact path={'/'} component={Index}/>
            <Route exact path={'/home'} component={Index}/>
            <Route exact path={'/signin'} component={SignIn}/>
            <Route exact path={'/signup'} component={SignUp}/>
            <Route exact path={'/user/dashboard/:userId'} component={Main}/>
            <Route exact path={'/user/products/:userId'} component={Main}/>
            <Route exact path={'/user/products/:userId/:productId'} component={Main}/>
            <Route exact path={'/user/history/:userId'} component={Main}/>
            <Route exact path={'/user/messages/:userId'} component={Main}/>
            <Route exact path={'/user/profile/:userId'} component={Main}/>
            <Route exact path={'/user/setting/:userId'} component={Main}/>
        </Switch>
    </div>
);



export default MainRouter;