import {Link} from "react-router-dom";
import {isAuthenticated} from "../../auth";
import React from "react";

const Card = (props) =>{
    const product = props.product;
    return(
        <>
                <div className="card h-100">

                    {
                        product.picture[0] === undefined?
                            <img   alt="product_review"
                                 className="card-img-top"
                                   src = {"assets/img/products/default.jpg"}
                            /> :
                            <img src={process.env.REACT_APP_API_STRAPI+`${product.picture[0].url}`} alt="product_review"
                                 className="card-img-top"
                                 onError={i => (i.target.src = "assets/img/products/default.jpg")}
                            />
                    }

                    <div className="card-body">
                        <div className="row px-3">
                            <h5 className="card-title ">{product.name}</h5>
                            <h5 className="card-title ml-auto text-uppercase">Goal: <span
                                className="text-success">{product.goal_price} $</span></h5>
                        </div>
                        <hr/>
                        <div className="card-text overflow-auto" style={{height: '13rem'}}>

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
                    <Link className="single-product_detail_link" to={`/user/${isAuthenticated().user_id}/products/1`}>
                        <button className="btn btn-primary single-product_detail w-100">Detail</button>
                    </Link>
                </div>
        </>
    );

};

export default Card;