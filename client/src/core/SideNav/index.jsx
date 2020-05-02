import React from "react";
import {Link} from "react-router-dom";
import {isAuthenticated} from "../../auth";


const SideNav = () =>(

    <>
        <div className="col col-2 bg-dark min-vh-100 nav-vertical">
            <div className="nav-tabs my-3">
                <div className="row my-3"><Link to={`/user/${isAuthenticated().user_id}/dashboard`}
                                             className="btn btn-dark mx-auto p-3 w-100">Dashboard</Link></div>
                <div className="row my-3"><Link to={`/user/${isAuthenticated().user_id}/products`} className="btn btn-dark mx-auto p-3 w-100">My
                    Products</Link></div>
                <div className="row my-3"><Link to={`/user/${isAuthenticated().user_id}/history`} className="btn btn-dark mx-auto p-3 w-100">Deal
                    History</Link></div>
                <div className="row my-3">
                        <Link to={`/user/${isAuthenticated().user_id}/messages`} className="btn btn-dark mx-auto p-3 w-100">Messages</Link>
                </div>
                <div className="row my-3">
                        <Link to={`/user/${isAuthenticated().user_id}/profile`} className="btn btn-dark mx-auto p-3 w-100">Profile</Link>
                </div>
                <div className="row my-3">
                        <Link to={`/user/${isAuthenticated().user_id}/setting`} className="btn btn-dark mx-auto p-3 w-100">Setting</Link>
                </div>
            </div>
        </div>
    </>
)

export default SideNav;