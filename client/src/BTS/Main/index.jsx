import React, {useEffect} from "react";
import { withRouter } from "react-router";
import SideNav from "../../core/SideNav";
import HeaderBar from "../../core/HeaderBar";
import DashBoard from "../DashBoard";
import MyProducts from "../MyProducts";
import {isAuthenticated} from "../../auth";
import ProductDetail from "../ProductDetail";
import DealHistory from "../DealHistory";

const Main = (history) => (
    <>
        {useEffect(() => document.title = `MD | ${isAuthenticated().basic.username.toUpperCase()}`, [])}
        <div className="container-fluid bg-dark text-white">
            <div className={'row'}>
                <SideNav/>
                <div className="col col-10 bg-white overflow-auto"  style={{height: '100vh'}}>
                    <HeaderBar/>

                    {
                        history.match.url === `/user/${isAuthenticated().user_id}/dashboard` &&   <DashBoard/>
                    }

                    {
                        history.match.url === `/user/${isAuthenticated().user_id}/products` &&   <MyProducts/>
                    }

                    {
                        history.match.url === `/user/${isAuthenticated().user_id}/products/1` &&   <ProductDetail/>
                    }

                    {
                        history.match.url === `/user/${isAuthenticated().user_id}/history` &&   <DealHistory/>
                    }

                </div>
            </div>
        </div>
    </>
);

export default withRouter(Main);