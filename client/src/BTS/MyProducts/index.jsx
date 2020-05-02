import React from "react";
import {Link} from "react-router-dom";
import {isAuthenticated} from "../../auth";

const MyProducts = () =>(

    <>
        <div className="row bg-light text-dark" style={{height: 'auto'}}>
            <div className="col">
                <div className="row">
                    <div className="col-5">
                        <h1 className="py-5">My Products</h1>
                    </div>
                    <div className="col-2 ml-auto">
                        <button className="btn btn-success my-5 w-100" data-toggle="modal" data-target="#exampleModal">
                            <i className="far fa-plus-square"></i> Add Product
                        </button>
                    </div>
                </div>
                <div className="row py-2">

                    <div className="col col-4 py-3 single-product_review">
                        <div className="card h-100">
                            <img src="../../assets/img/products/product_1.jpg" className="card-img-top"
                                 alt="product_review"/>
                                <div className="card-body">
                                    <div className="row px-3">
                                        <h5 className="card-title ">iPhone 4s</h5>
                                        <h5 className="card-title ml-auto text-uppercase">Goal: <span
                                            className="text-success">110.00 $</span></h5>
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
                    </div>
                    <div className="col col-4 py-3 single-product_review">
                        <div className="card h-100">
                            <img src="../../assets/img/products/product_2.jpg" className="card-img-top"
                                 alt="product_review"/>
                                <div className="card-body">
                                    <div className="row px-3">
                                        <h5 className="card-title ">LG gram 14</h5>
                                        <h5 className="card-title ml-auto text-uppercase">Goal: <span
                                            className="text-danger">1000.00 $</span></h5>
                                    </div>
                                    <hr/>
                                    <div className="card-text overflow-auto" style={{height: '13rem'}}>

                                        <div className="row m-2 single-comment text-center">
                                            <div className="col-6">
                                                <h5>Nihao:</h5>
                                            </div>
                                            <div className="col text-warning">
                                                970.30 $
                                            </div>
                                        </div>
                                        <div className="row m-2 single-comment text-center">
                                            <div className="col-6">
                                                <h5>user_2:</h5>
                                            </div>
                                            <div className="col text-warning">
                                                870.40 $
                                            </div>
                                        </div>
                                        <div className="row m-2 single-comment text-center">
                                            <div className="col-6">
                                                <h5>Nihao:</h5>
                                            </div>
                                            <div className="col text-warning">
                                                763.00 $
                                            </div>
                                        </div>

                                        <div className="row m-2 single-comment text-center">
                                            <div className="col-6">
                                                <h5>user_2:</h5>
                                            </div>
                                            <div className="col text-warning">
                                                700.56 $
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
                                <button className="btn btn-primary single-product_detail">Detail</button>
                        </div>
                    </div>

                    <div className="col col-4 py-3 single-product_review">
                        <div className="card h-100">
                            <img src="../../assets/img/products/product_3.jpg" className="card-img-top"
                                 alt="product_review"/>
                                <div className="card-body">
                                    <div className="row px-3">
                                        <h5 className="card-title ">iNikon D3500</h5>
                                        <h5 className="card-title ml-auto text-uppercase">Goal: <span
                                            className="text-success">680.00 $</span></h5>
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
                                <button className="btn btn-primary single-product_detail">Detail</button>
                        </div>
                    </div>

                    <div className="col col-4 py-3 single-product_review">
                        <div className="card h-100">
                            <img src="../../assets/img/products/product_4.jpg" className="card-img-top"
                                 alt="product_review"/>
                                <div className="card-body">
                                    <div className="row px-3">
                                        <h5 className="card-title ">Lolo Bike</h5>
                                        <h5 className="card-title ml-auto text-uppercase">Goal: <span
                                            className="text-success">410.60 $</span></h5>
                                    </div>
                                    <hr/>
                                    <div className="card-text overflow-auto" style={{height: '13rem'}}>

                                        <div className="row m-2 single-comment text-center">
                                            <div className="col-6">
                                                <h5>Nihao:</h5>
                                            </div>
                                            <div className="col text-success">
                                                470.00 $
                                            </div>
                                        </div>
                                        <div className="row m-2 single-comment text-center">
                                            <div className="col-6">
                                                <h5>user_2:</h5>
                                            </div>
                                            <div className="col text-warning">
                                                150.00 $
                                            </div>
                                        </div>
                                        <div className="row m-2 single-comment text-center">
                                            <div className="col-6">
                                                <h5>Nihao:</h5>
                                            </div>
                                            <div className="col text-warning">
                                                143.00 $
                                            </div>
                                        </div>
                                        <div className="row m-2 single-comment text-center">
                                            <div className="col-6">
                                                <h5>user_2:</h5>
                                            </div>
                                            <div className="col text-warning">
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
                                <button className="btn btn-primary single-product_detail">Detail</button>
                        </div>
                    </div>
                    <div className="col col-4 py-3 single-product_review">
                        <div className="card h-100">
                            <img src="../../assets/img/products/product_5.jpg" className="card-img-top"
                                 alt="product_review"/>
                                <div className="card-body">
                                    <div className="row px-3">
                                        <h5 className="card-title ">Dell G5</h5>
                                        <h5 className="card-title ml-auto text-uppercase">Goal: <span
                                            className="text-success">1300.40 $</span></h5>
                                    </div>
                                    <hr/>
                                    <div className="card-text overflow-auto" style={{height: '13rem'}}>
                                        <div className="row m-2 single-comment text-center">
                                            <div className="col-6">
                                                <h5>Nihao:</h5>
                                            </div>
                                            <div className="col text-success">
                                                1420.00 $
                                            </div>
                                        </div>
                                        <div className="row m-2 single-comment text-center">
                                            <div className="col-6">
                                                <h5>user_2:</h5>
                                            </div>
                                            <div className="col text-success">
                                                1329.00 $
                                            </div>
                                        </div>
                                        <div className="row m-2 single-comment text-center">
                                            <div className="col-6">
                                                <h5>user_2:</h5>
                                            </div>
                                            <div className="col text-success">
                                                1325.56 $
                                            </div>
                                        </div>
                                        <div className="row m-2 single-comment text-center">
                                            <div className="col-6">
                                                <h5>Nihao:</h5>
                                            </div>
                                            <div className="col text-success">
                                                1320.40 $
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
                                <button className="btn btn-primary single-product_detail">Detail</button>
                        </div>
                    </div>
                    <div className="col col-4 py-3 single-product_review">
                        <div className="card h-100">
                            <img src="../../assets/img/products/product_6.jpg" className="card-img-top"
                                 alt="product_review"/>
                                <div className="card-body">
                                    <div className="row px-3">
                                        <h5 className="card-title" data-toggle="tooltip" data-placement="top"
                                            title="Mercedes-Benz">Mercedes-...</h5>
                                        <h5 className="card-title ml-auto text-uppercase">Goal: <span
                                            className="text-danger">44,000.00 $</span></h5>
                                    </div>
                                    <hr/>
                                    <div className="card-text overflow-auto" style={{height: '13rem'}}>
                                        <div className="row m-2 single-comment text-center">
                                            <div className="col-6">
                                                <h5>Nihao:</h5>
                                            </div>
                                            <div className="col text-warning">
                                                33,000.00 $
                                            </div>
                                        </div>
                                        <div className="row m-2 single-comment text-center">
                                            <div className="col-6">
                                                <h5>user_2:</h5>
                                            </div>
                                            <div className="col text-warning">
                                                32,000.00 $
                                            </div>
                                        </div>
                                        <div className="row m-2 single-comment text-center">
                                            <div className="col-6">
                                                <h5>Nihao:</h5>
                                            </div>
                                            <div className="col text-warning">
                                                23,000.00 $
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
                                <button className="btn btn-primary single-product_detail">Detail</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

);

export default MyProducts;