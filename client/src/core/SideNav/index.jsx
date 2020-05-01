import React from "react";
import {Link} from "react-router-dom";
import {isAuthenticated} from "../../auth";


const SideNav = () =>(

    <>
        <div className="col col-2 bg-dark min-vh-100 nav-vertical">
            <div className="nav-tabs my-3">
                <div className="row my-3"><Link to={`/user/dashboard/${isAuthenticated().user_id}`}
                                             className="btn btn-dark mx-auto p-3 w-100 active">Dashboard</Link></div>
                <div className="row my-3"><Link to={`/user/products/${isAuthenticated().user_id}`} className="btn btn-dark mx-auto p-3 w-100">My
                    Products</Link></div>
                <div className="row my-3"><Link to={`/user/history/${isAuthenticated().user_id}`} className="btn btn-dark mx-auto p-3 w-100">Deal
                    History</Link></div>
                <div className="row my-3">
                    <button className="btn btn-dark mx-auto p-3 w-100">Messages</button>
                </div>
                <div className="row my-3">
                    <button className="btn btn-dark mx-auto p-3 w-100">Profile</button>
                </div>
                <div className="row my-3">
                    <button className="btn btn-dark mx-auto p-3 w-100">Setting</button>
                </div>
            </div>
        </div>
    </>
);

export default SideNav;