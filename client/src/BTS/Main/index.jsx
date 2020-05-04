import React, {useEffect, useState} from "react";
import { withRouter } from "react-router";
import SideNav from "../../core/SideNav";
import HeaderBar from "../../core/HeaderBar";
import DashBoard from "../DashBoard";
import MyProducts from "../MyProducts";
import {isAuthenticated} from "../../auth";
import ProductDetail from "../ProductDetail";
import DealHistory from "../DealHistory";
import {fetchUser} from "../../api/users";




const Main = (history) => {

    const [user, setUser] = useState({
        products: []
    });

    const handleUser = () => {
      const token = isAuthenticated().jwt;
      const id = isAuthenticated().basic.user_id;
      fetchUser(token, id).then(data=>{
              if(data.err){
                  console.log(data.err)
              }else {
                  setUser({
                      products: data.products
                  })
              }
      }).catch(err => {
          console.log(err);
      })
    };

    useEffect(() => {
        document.title = `MD | ${isAuthenticated().basic.username.toUpperCase()}`;
        console.log("get info");
        handleUser()
    }, []);

    return (<>

        <div className="container-fluid bg-dark text-white">
            <div className={'row'}>
                <SideNav/>
                <div className="col col-10 bg-white overflow-auto"  style={{height: '100vh'}}>
                    <HeaderBar/>

                    {
                        history.match.url === `/user/${isAuthenticated().basic.user_id}/dashboard` &&
                        <DashBoard products={user.products}/>
                    }

                    {
                        history.match.url === `/user/${isAuthenticated().basic.user_id}/products` &&
                        <MyProducts products={user.products}/>
                    }

                    {
                        history.match.url === `/user/${isAuthenticated().basic.user_id}/products/1` &&   <ProductDetail/>
                    }

                    {
                        history.match.url === `/user/${isAuthenticated().basic.user_id}/history` &&   <DealHistory/>
                    }

                </div>
            </div>
        </div>
    </>)
}

export default withRouter(Main);