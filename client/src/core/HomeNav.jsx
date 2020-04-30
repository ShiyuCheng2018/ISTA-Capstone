import React from 'react';
import {Link, withRouter} from "react-router-dom";


const HomeNav = () => (
    <>
        <div class="container-fluid top-navigation border-bottom">
        <div class="row text-center">
            <div class="col-md-4 col p-0 ml-auto">
                <button class="btn btn-outline-dark border-0">Wish List <span>(0)</span></button>
                <button class="btn btn-outline-dark border-0">My Account</button>
                <button class="btn btn-outline-dark border-0">Language</button>
                <a class="btn btn-outline-dark border-0" href="auth/signIn.html" style={{textDecoration: "none"}}>Sign In | up</a>
            </div>
        </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">MoneyDock</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <a className="ml-4" href="User/seller/dashBoard.html">
                <img src="assets/img/avatars/user2.jpg" alt="user" style={{borderRadius: 10,  height: 40, width: 40}}/>
            </a>
        </div>
    </nav>
    </>
);

export default withRouter(HomeNav);


