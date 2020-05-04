import React from "react";
import {isAuthenticated, signOut} from "../../auth";
import {Link} from "react-router-dom";


const HeaderBar = () => (
    <>
        <div className="row h-auto bg-white text-dark py-4 shadow-lg">
            <div className="col col-4 text-uppercase font-weight-bolder">

                {
                    !isAuthenticated().basic.profile_img?
                        <img src={process.env.REACT_APP_API_STRAPI+`${isAuthenticated().basic.default_profile}`}
                             className="login_img rounded-sm mx-2"
                             style={{height: 40, width: 40}} alt="user"
                        /> :
                        <img src = {process.env.REACT_APP_API_STRAPI+`${isAuthenticated().basic.profile_img.url}`}
                             className="login_img rounded-sm mx-2"
                             style={{height: 40, width: 40}} alt="user"
                        />
                }

                    {isAuthenticated().basic.username}

            </div>
            <div className="col col-2 ml-auto">
                    <Link to={'/home'} class={"btn btn-danger px-4"} onClick={()=>{signOut()}}>Sign out</Link>
            </div>
        </div>
    </>
);

export default HeaderBar;