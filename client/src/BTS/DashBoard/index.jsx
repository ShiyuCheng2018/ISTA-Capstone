import React from 'react';
import './styles.css';
import {isAuthenticated} from "../../auth";
import {Link} from "react-router-dom";

const DashBoard = (props) => {

    const {products} = props;
     console.log(products[0]);

    const num = Math.floor(Math.random() * (products.length-1));

    return (<>
        <div className="row bg-light text-dark overflow-auto" style={{height: 'auto'}}>
            <div className="col">
                <div className="row">
                    <div className="col-5">
                        <h1 className="py-2"><span>Dashboard</span></h1>
                    </div>
                </div>

                <div className="row dashboard">
                    <div className="col">
                        <div className="row dashboard__brief">
                            <div className="col tab dashboard__brief__1">
                                <h6>You total sold: 12 items</h6>
                                <h3>$ 3240</h3>
                            </div>
                            <div className="col tab dashboard__brief__2">
                                <h6>You total bought: 5 items</h6>
                                <h3>$ 350</h3>
                            </div>
                            <div className="col tab dashboard__brief__3">
                                <h6>Your items: 12 items</h6>
                                <h3>6</h3>
                            </div>
                            <div className="col tab dashboard__brief__4">
                                <h6>Following items: 3 items</h6>
                                <h3>4</h3>
                            </div>
                            <div className="col tab dashboard__brief__5">
                                <h6>Processing bids: </h6>
                                <h3>12</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row dashboard-content">
                    <div className="col col-md-5 dashboard-content__showCard" style={{height: 'auto'}}>
                        {!products.length > 0 ? <h2>You do not have any products"</h2>:
                            <div className="card" style={{height: '70%'}}>

                                {
                                    products[0].picture[0] === undefined?
                                        <img src = {`${process.env.REACT_APP_API_STRAPI}/uploads/item_default.jpg_670c9d9c9b.jpeg`} alt="product_review"
                                             className="card-img-top"
                                        /> :
                                        <img src={process.env.REACT_APP_API_STRAPI+`${products[num].picture[0].url}`}
                                             alt="product_review"
                                             className="card-img-top"
                                             onError={i => (i.target.src = "assets/img/products/default.jpg")}
                                        />
                                }

                            <div className="card-body">
                                <div className="row px-3">
                                    <h5 className="card-title ">{products[num].name}</h5>
                                    <h5 className="card-title ml-auto text-uppercase">Goal: <span
                                        className="text-success">{products[num].goal_price}</span></h5>
                                </div>
                                <hr/>
                                <div className="card-text overflow-auto" style={{height: '70%'}}>
                                    <div className="row m-2 single-comment text-center">
                                        <div className="col-6">
                                            <h5>Nihao:</h5>
                                        </div>
                                        <div className="col text-success">
                                            150.00 $
                                        </div>
                                    </div>
                                    <div className="row m-2 single-comment text-center">
                                        <div className="col-6">
                                            <h5>user_2:</h5>
                                        </div>
                                        <div className="col text-success">
                                            150.00 $
                                        </div>
                                    </div>
                                    <div className="row m-2 single-comment text-center">
                                        <div className="col-6">
                                            <h5>Nihao:</h5>
                                        </div>
                                        <div className="col text-success">
                                            143.00 $
                                        </div>
                                    </div>
                                    <div className="row m-2 single-comment text-center">
                                        <div className="col-6">
                                            <h5>user_2:</h5>
                                        </div>
                                        <div className="col text-success">
                                            113.56 $
                                        </div>
                                    </div>
                                    <div className="row m-2 single-comment text-center">
                                        <div className="col-6">
                                            <h5>Nihao:</h5>
                                        </div>
                                        <div className="col text-warning">
                                            100.00 $
                                        </div>
                                    </div>
                                    <div className="row m-2 single-comment text-center">
                                        <div className="col-6">
                                            <h5>user_2:</h5>
                                        </div>
                                        <div className="col text-success text-warning">
                                            98.34 $
                                        </div>
                                    </div>
                                    <div className="row m-2 single-comment text-center">
                                        <div className="col-6">
                                            <h5>Nihao:</h5>
                                        </div>
                                        <div className="col text-warning">
                                            67.84 $
                                        </div>
                                    </div>
                                    <div className="row m-2 single-comment text-center">
                                        <div className="col-6">
                                            <h5>user_2:</h5>
                                        </div>
                                        <div className="col text-warning">
                                            63.40 $
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link className="single-product_detail_link"
                                  to={`/user/${isAuthenticated().basic.user_id}/products/1`}>
                                <button className="btn btn-primary single-product_detail w-100">Detail</button>
                            </Link>
                        </div>}
                    </div>
                    <div className="col col-md dashboard-content__data pt-5 px-3">

                        <h4>Deal History</h4>
                        <div className="row">
                            <div className="col table dealHistory-table p-0 m-3">
                                <div className="row dealHistory-table__bar p-2">
                                    <div className="col">Product</div>
                                    <div className="col col-3">Deal Date</div>
                                    <div className="col col-3">Total</div>
                                </div>
                                <div className="row dealHistory-table__items m-0 p-0">
                                    <div className="col p-0 m-0">
                                        <div className="row dealHistory-table__item">
                                            <div className="col p-2">
                                                <img src="../../assets/img/products/product_5.jpg"
                                                     alt="product item pic" className="dealHistory-table__item__pic"/>
                                            </div>
                                            <div className="col col-3 p-2">
                                                <span className="badge badge-pill date">04/05/2020</span>
                                            </div>
                                            <div className="col col-3 p-2">
                                                <span className="badge badge-pill price badge-success">$ 1,340.00</span>
                                            </div>
                                        </div>
                                        <div className="row dealHistory-table__item">
                                            <div className="col p-2">
                                                <img src="../../assets/img/products/product_6.jpg"
                                                     alt="product item pic" className="dealHistory-table__item__pic"/>
                                            </div>
                                            <div className="col col-3 p-2">
                                                <span className="badge badge-pill date">03/23/2020</span>
                                            </div>
                                            <div className="col col-3 p-2">
                                                <span
                                                    className="badge badge-pill price badge-success">$ 29,192.00</span>
                                            </div>
                                        </div>
                                        <div className="row dealHistory-table__item">
                                            <div className="col p-2">
                                                <img src="../../assets/img/products/books.jpeg" alt="product item pic"
                                                     className="dealHistory-table__item__pic"/>
                                            </div>
                                            <div className="col col-3 p-2">
                                                <span className="badge badge-pill date">02/29/2020</span>
                                            </div>
                                            <div className="col col-3 p-2">
                                                <span className="badge badge-pill price bg-warning">$ 78.89</span>
                                            </div>
                                        </div>
                                        <div className="row dealHistory-table__item">
                                            <div className="col p-2">
                                                <img src="../../assets/img/products/TV.jpg" alt="product item pic"
                                                     className="dealHistory-table__item__pic"/>
                                            </div>
                                            <div className="col col-3 p-2">
                                                <span className="badge badge-pill date">02/07/2020</span>
                                            </div>
                                            <div className="col col-3 p-2">
                                                <span className="badge badge-pill price badge-warning">$ 760.78</span>
                                            </div>
                                        </div>
                                        <div className="row dealHistory-table__item">
                                            <div className="col p-2">
                                                <img src="../../assets/img/products/product_3.jpg"
                                                     alt="product item pic" className="dealHistory-table__item__pic"/>
                                            </div>
                                            <div className="col col-3 p-2">
                                                <span className="badge badge-pill date">01/29/2020</span>
                                            </div>
                                            <div className="col col-3 p-2">
                                                <span className="badge badge-pill price badge-warning">$ 345.67</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3 mx-auto">
                                        <Link to={`/user/${isAuthenticated().basic.user_id}/history`}>Show More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h4>Your Bids</h4>
                        <div className="row">
                            <div className="col table bids-table p-0 m-3">
                                <div className="row bids-table__item m-0 p-0">
                                    <div className="col p-0 m-0">
                                        <div className="row bids-table__item">
                                            <div className="col">
                                                <img src="../../assets/img/products/hp_2018.jpg" alt="product item pic"
                                                     className="bids-table__item__pic"/>
                                            </div>
                                            <div className="col col-3 p-2">
                                                <span>HP laptop 2018</span>
                                            </div>
                                            <div className="col col-3 p-2">
                                                <span style={{opacity: .5}}>0 bid(s) above yours</span>
                                            </div>
                                            <div className="col col-3 p-2">
                                                <span>$ 1,340.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row bids-table__item m-0 p-0">
                                    <div className="col p-0 m-0">
                                        <div className="row bids-table__item">
                                            <div className="col">
                                                <img src="../../assets/img/products/macbook_pro_2018.jpeg"
                                                     alt="product item pic" className="bids-table__item__pic"/>
                                            </div>
                                            <div className="col col-3 p-2">
                                                <span>MacBook Pro 2018</span>
                                            </div>
                                            <div className="col col-3 p-2">
                                                <span style={{opacity: .5}}>4 bid(s) above yours</span>
                                            </div>
                                            <div className="col col-3 p-2">
                                                <span>$ 1,689.79</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row bids-table__item m-0 p-0">
                                    <div className="col p-0 m-0">
                                        <div className="row bids-table__item">
                                            <div className="col">
                                                <img src="../../assets/img/products/htc_vivi.jpg" alt="product item pic"
                                                     className="bids-table__item__pic"/>
                                            </div>
                                            <div className="col col-3 p-2">
                                                <span>HTC VIVI</span>
                                            </div>
                                            <div className="col col-3 p-2">
                                                <span style={{opacity: .5}}>2 bid(s) above yours</span>
                                            </div>
                                            <div className="col col-3 p-2">
                                                <span>$ 789.65</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row bids-table__item m-0 p-0">
                                    <div className="col p-0 m-0">
                                        <div className="row bids-table__item">
                                            <div className="col">
                                                <img src="../../assets/img/products/switch.jpg" alt="product item pic"
                                                     className="bids-table__item__pic"/>
                                            </div>
                                            <div className="col col-3 p-2">
                                                <span>Nintendo Switch</span>
                                            </div>
                                            <div className="col col-3 p-2">
                                                <span style={{opacity: .5}}>1 bid(s) above yours</span>
                                            </div>
                                            <div className="col col-3 p-2">
                                                <span>$ 246.67</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
};

export default DashBoard;