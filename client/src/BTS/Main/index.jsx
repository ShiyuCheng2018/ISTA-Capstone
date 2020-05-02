import React from "react";
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
        {console.log(history.match.url)}
        <div className="container-fluid bg-dark text-white">
            <div className={'row'}>
                <SideNav/>
                <div className="col col-10 bg-white">
                    <HeaderBar/>

                    {
                        history.match.url === `/user/dashboard/${isAuthenticated().user_id}` &&   <DashBoard/>
                    }

                    {
                        history.match.url === `/user/products/${isAuthenticated().user_id}` &&   <MyProducts/>
                    }

                    {
                        history.match.url === `/user/products/${isAuthenticated().user_id}/1` &&   <ProductDetail/>
                    }

                    {
                        history.match.url === `/user/history/${isAuthenticated().user_id}` &&   <DealHistory/>
                    }

                </div>
            </div>
        </div>
    </>
);

export default withRouter(Main);