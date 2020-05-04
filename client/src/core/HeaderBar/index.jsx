import React from "react";
import {isAuthenticated} from "../../auth";


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
                        <img src = {process.env.REACT_APP_API_STRAPI+`${isAuthenticated().basic.profile_img}`}
                             className="login_img rounded-sm mx-2"
                             style={{height: 40, width: 40}} alt="user"
                        />
                }

                    {isAuthenticated().basic.username}

            </div>
            <div className="col col"></div>
        </div>
    </>
);

export default HeaderBar;