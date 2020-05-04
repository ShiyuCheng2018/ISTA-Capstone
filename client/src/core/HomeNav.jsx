import React, {useEffect} from 'react';
import {Link, withRouter} from "react-router-dom";
import {isAuthenticated, signOut} from "../auth";

const handleSignOut = () =>{
    const data = signOut();
    document.title = "MonkeyDock | Home";
    console.log(data.message);
};

function HomeNav(){

        {/*hooks: componentDidMount*/}
        useEffect(() => {
            isAuthenticated() ?
                document.title = `MD | ${isAuthenticated().basic.username.toUpperCase()}`
                :
                document.title = "MonkeyDock | Home";
        }, []);

        // user profile picture
        function getProfilePic(){
                if(isAuthenticated()){
                    return (
                    <Link className="ml-4" to={`user/${isAuthenticated().basic.user_id}/dashboard`}>
                        <img src={process.env.REACT_APP_API_STRAPI+`${isAuthenticated().basic.profile_img.url}`} alt="user"
                             style={{borderRadius: 10, height: 40, width: 40}}/>
                    </Link>
                    )
                }else {
                    return  (
                        <Link className="ml-4" to={`signin`}>
                            <img src={"assets/img/avatars/default.png"} alt="user"
                                 style={{borderRadius: 10, height: 40, width: 40}}/>
                        </Link>
                    )
                }
        }

        return (
            <>
        <div className="container-fluid top-navigation border-bottom">
            <div className="row text-center">
                <div className="col-md-5 col p-0 ml-auto">
                    <button className="btn btn-outline-dark border-0">Wish List <span>(0)</span></button>
                    <button className="btn btn-outline-dark border-0">My Account</button>
                    <button className="btn btn-outline-dark border-0">Language</button>

                    {
                        (!isAuthenticated() && (
                            <Link class="btn btn-outline-dark border-0" style={{textDecoration: "none"}} to={"/signin"}>Sign
                                In | up</Link>
                        ))
                    }

                    {
                        (isAuthenticated() && (
                            <>
                                <Link className="btn btn-outline-danger border-0" style={{textDecoration: "none"}}
                                      onClick={() => {
                                          handleSignOut()
                                      }} to={"/home"}>Sign out</Link>
                                <Link class="btn btn-outline-success border-0" style={{textDecoration: "none"}}
                                      to={`user/${isAuthenticated().basic.user_id}/dashboard`}>{isAuthenticated().basic.username.toUpperCase()}</Link>
                            </>
                        ))
                    }

                </div>
            </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link className="navbar-brand" to={"/home"}>MoneyDock</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to={"/home"}>Home <span className="sr-only">(current)</span></Link>
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

                    {getProfilePic()}
            </div>
        </nav>
        </>)

}

export default withRouter(HomeNav);


