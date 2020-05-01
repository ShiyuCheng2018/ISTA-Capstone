import React from "react";


const HeaderBar = () => (
    <>
        <div className="row h-auto bg-white text-dark py-4 shadow-lg">
            <div className="col col-4 text-uppercase font-weight-bolder">
                <img src="../../assets/img/avatars/user2.jpg" className="login_img rounded-sm mx-2"
                     style={{height: 40, width: 40}} alt="user" />
                    Shiyu Cheng</div>
            <div className="col col"></div>
        </div>
    </>
);

export default HeaderBar;