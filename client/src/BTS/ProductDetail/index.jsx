import React from "react";
import OwlCarousel from "react-owl-carousel";
import {Link} from "react-router-dom";
import {isAuthenticated} from "../../auth";

const ProductDetail = () =>(

    <>
        <div className="row bg-light text-dark overflow-auto" style={{height: 'auto'}}>
            <div className="col">

                <div className="row">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb m-0 mx-3">
                            <li className="breadcrumb-item"><Link to={`/user/products/${isAuthenticated().user_id}`}>Products</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Detail</li>
                        </ol>
                    </nav>
                </div>

                <div className="row">
                    <div className="col-5">
                        <h1 className="py-2"><span>Iphone 4s</span></h1>
                    </div>
                    <div className="col-2 ml-auto">
                        <button className="btn btn-success my-2 w-100" data-toggle="modal" data-target="#deleteModal"><i
                            className="fas fa-edit"></i>Edit Product
                        </button>
                    </div>
                    <div className="col-2 ">
                        <button className="btn btn-danger my-2 w-100" data-toggle="modal" data-target="#deleteModal"><i
                            className="far fa-trash-alt"></i> Remove Product
                        </button>
                    </div>
                </div>

                <div className="row py-2 product-detail">
                    <div className="col col-5 product-detail-img_container ">
                        <img className="py-5 product-detail-img-container_big"
                             src="../../assets/img/products/product_1.jpg" alt="product"/>

                        <OwlCarousel loop
                                     margin={10}
                                     className="owl-theme product-detail-img-container_carousel">
                            <div className="item"><img src="../../assets/img/products/product_2.jpg"
                                                       alt="product small"/></div>
                            <div className="item"><img src="../../assets/img/products/product_3.jpg"
                                                       alt="product small"/></div>
                            <div className="item"><img src="../../assets/img/products/product_4.jpg"
                                                       alt="product small"/></div>
                            <div className="item"><img src="../../assets/img/products/product_5.jpg"
                                                       alt="product small"/></div>
                            <div className="item"><img src="../../assets/img/products/product_6.jpg"
                                                       alt="product small"/></div>
                            <div className="item"><img src="../../assets/img/products/product_1.jpg"
                                                       alt="product small"/></div>
                        </OwlCarousel>
                    </div>

                    <div className="col col product-detail-info-container">
                        <div className="row" style={{height: '9%'}}>
                            <div className="col col-7 ml-auto p-0">
                                <h2>Goal: $ <span className="text-success">430</span></h2>
                            </div>
                        </div>

                        <div className="row ">
                            <div className="col col-8 product-detail-info-container_bids bg-white overflow-auto">
                                <div className="row product-detail-info-container-user-container p-2">

                                    <div
                                        className="col-2 product-detail-info-container-user-container-user p-0 text-center"
                                        style={{height: '7rem'}}>
                                        <img
                                            className="product-detail-info-container-user-container-user_img rounded-lg"
                                            src="../../assets/img/avatars/user1.jpg" alt="user"
                                            style={{height: '70%', width: '100%'}}/>
                                        <h6 className="product-detail-info-container-user-container-user_name">hello_2020</h6>
                                    </div>

                                    <div className="col-7 mx-md-3 product-detail-info-container-user-container-comment"
                                         style={{height: '6rem'}}>

                                        <div
                                            className="row bg-primary product-detail-info-container-user-container-comment_words p-2 text-white overflow-auto rounded-lg"
                                            style={{height: '60%'}}>
                                            I really need this phone cuz I really don't have too many budget to get a
                                            new iphone! This's all what I have, guys,
                                            please left this for me! Many thanks!!!!!
                                        </div>
                                        <div
                                            className="row mt-3 product-detail-info-container-user-container-comment_rates text-success">
                                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                            className="fas fa-star"></i><i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                            className="fas fa-star"></i><i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i><i className="far fa-star"></i>
                                        </div>
                                    </div>

                                    <div className="col-md-1 px-2 product-detail-info-container-user-container-bid"
                                         style={{height: '6rem'}}>
                                        <div className="row">
                                            <span
                                                className="product-detail-info-container-user-container-price text-success">520</span>
                                        </div>
                                        <div className="row product-detail-info-container-user-container-actions">
                                            <button className="badge badge-pill badge-primary mx-auto">CONFORM</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row product-detail-info-container-user-container p-2">
                                    <div
                                        className="col-2 product-detail-info-container-user-container-user p-0 text-center"
                                        style={{height: '7rem'}}>
                                        <img
                                            className="product-detail-info-container-user-container-user_img rounded-lg"
                                            src="../../assets/img/avatars/user2.jpg" alt="user"
                                            style={{height: '70%', width: '100%'}}/>
                                        <h6 className="product-detail-info-container-user-container-user_name">Jack_2020</h6>
                                    </div>

                                    <div className="col-7 mx-3 product-detail-info-container-user-container-comment"
                                         style={{height: '6rem'}}>
                                        <div
                                            className="row bg-primary product-detail-info-container-user-container-comment_words p-2 text-white overflow-auto rounded-lg"
                                            style={{height: '60%'}}>
                                            I really need this phone cuz I really don't have too many budget to get a
                                            new iphone! This's all what I have, guys,
                                            please left this for me! Many thanks!!!!!
                                        </div>
                                        <div
                                            className="row mt-3 product-detail-info-container-user-container-comment_rates text-success">
                                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                            className="fas fa-star"></i><i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                            className="fas fa-star"></i><i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i><i className="far fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="col-md-1 px-2 product-detail-info-container-user-container-bid"
                                         style={{height: '6rem'}}>
                                        <div className="row">
                                            <span
                                                className="product-detail-info-container-user-container-price text-success">470</span>
                                        </div>
                                        <div className="row product-detail-info-container-user-container-actions">
                                            <button className="badge badge-pill badge-primary mx-auto">CONFORM</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row product-detail-info-container-user-container p-2">
                                    <div
                                        className="col-2 product-detail-info-container-user-container-user p-0 text-center"
                                        style={{height: '7rem'}}>
                                        <img
                                            className="product-detail-info-container-user-container-user_img rounded-lg"
                                            src="../../assets/img/avatars/user3.jpg" alt="user"
                                            style={{height: '70%', width: '100%'}}/>
                                        <h6 className="product-detail-info-container-user-container-user_name">Rose_2020</h6>
                                    </div>
                                    <div className="col-7 mx-3 product-detail-info-container-user-container-comment"
                                         style={{height: '6rem'}}>
                                        <div
                                            className="row bg-primary product-detail-info-container-user-container-comment_words p-2 text-white overflow-auto rounded-lg"
                                            style={{height: '60%'}}>
                                            I really need this phone cuz I really don't have too many budget to get a
                                            new iphone! This's all what I have, guys,
                                            please left this for me! Many thanks!!!!!
                                        </div>
                                        <div
                                            className="row mt-3 product-detail-info-container-user-container-comment_rates text-success">
                                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                            className="fas fa-star"></i><i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                            className="fas fa-star"></i><i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i><i className="far fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="col-md-1 px-2 product-detail-info-container-user-container-bid"
                                         style={{height: '6rem'}}>
                                        <div className="row">
                                            <span
                                                className="product-detail-info-container-user-container-price text-success">450</span>
                                        </div>
                                        <div className="row product-detail-info-container-user-container-actions">
                                            <button className="badge badge-pill badge-primary mx-auto">CONFORM</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row product-detail-info-container-user-container p-2">
                                    <div
                                        className="col-2 product-detail-info-container-user-container-user p-0 text-center"
                                        style={{height: '7rem'}}>
                                        <img
                                            className="product-detail-info-container-user-container-user_img rounded-lg"
                                            src="../../assets/img/avatars/user4.jpg" alt="user"
                                            style={{height: '70%', width: '100%'}}/>
                                        <h6 className="product-detail-info-container-user-container-user_name">User_2020</h6>
                                    </div>
                                    <div className="col-7 mx-3 product-detail-info-container-user-container-comment"
                                         style={{height: '6rem'}}>
                                        <div
                                            className="row bg-primary product-detail-info-container-user-container-comment_words p-2 text-white overflow-auto rounded-lg"
                                            style={{height: '60%'}}>
                                            I really need this phone cuz I really don't have too many budget to get a
                                            new iphone! This's all what I have, guys,
                                            please left this for me! Many thanks!!!!!
                                        </div>
                                        <div
                                            className="row mt-3 product-detail-info-container-user-container-comment_rates text-success">
                                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                            className="fas fa-star"></i><i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                            className="fas fa-star"></i><i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i><i className="far fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="col-md-1 px-2 product-detail-info-container-user-container-bid"
                                         style={{height: '6rem'}}>
                                        <div className="row">
                                            <span
                                                className="product-detail-info-container-user-container-price text-warning">420</span>
                                        </div>
                                        <div className="row product-detail-info-container-user-container-actions">
                                            <button className="badge badge-pill badge-primary mx-auto">CONFORM</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row product-detail-info-container-user-container p-2">
                                    <div
                                        className="col-2 product-detail-info-container-user-container-user p-0 text-center"
                                        style={{height: '7rem'}}>
                                        <img
                                            className="product-detail-info-container-user-container-user_img rounded-lg"
                                            src="../../assets/img/avatars/user1.jpg" alt="user"
                                            style={{height: '70%', width: '100%'}}/>
                                        <h6 className="product-detail-info-container-user-container-user_name">hello_2020</h6>
                                    </div>
                                    <div className="col-7 mx-3 product-detail-info-container-user-container-comment"
                                         style={{height: "6rem"}}>
                                        <div
                                            className="row bg-primary product-detail-info-container-user-container-comment_words p-2 text-white overflow-auto rounded-lg"
                                            style={{height: "60%"}}>
                                            I really need this phone cuz I really don't have too many budget to get a
                                            new iphone! This's all what I have, guys,
                                            please left this for me! Many thanks!!!!!
                                        </div>
                                        <div
                                            className="row mt-3 product-detail-info-container-user-container-comment_rates text-success">
                                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                            className="fas fa-star"></i><i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                            className="fas fa-star"></i><i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i><i className="far fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="col-md-1 px-2 product-detail-info-container-user-container-bid"
                                         style={{height: "6rem"}}>
                                        <div className="row">
                                            <span
                                                className="product-detail-info-container-user-container-price text-warning">370</span>
                                        </div>
                                        <div className="row product-detail-info-container-user-container-actions">
                                            <button className="badge badge-pill badge-primary mx-auto">CONFORM</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="row product-detail-info-container-user-container p-2">

                                    <div
                                        className="col-2 product-detail-info-container-user-container-user p-0 text-center"
                                        style={{height: '7rem'}}>
                                        <img
                                            className="product-detail-info-container-user-container-user_img rounded-lg"
                                            src="../../assets/img/avatars/user2.jpg" alt="user"
                                            style={{height: '70%', width: '100%'}}/>
                                        <h6 className="product-detail-info-container-user-container-user_name">hello_2020</h6>
                                    </div>
                                    <div className="col-7 mx-3 product-detail-info-container-user-container-comment"
                                         style={{height: '6rem'}}>
                                        <div
                                            className="row bg-primary product-detail-info-container-user-container-comment_words p-2 text-white overflow-auto rounded-lg"
                                            style={{height: '60%'}}>
                                            I really need this phone cuz I really don't have too many budget to get a
                                            new iphone! This's all what I have, guys,
                                            please left this for me! Many thanks!!!!!
                                        </div>
                                        <div
                                            className="row mt-3 product-detail-info-container-user-container-comment_rates text-success">
                                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                            className="fas fa-star"></i><i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                            className="fas fa-star"></i><i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i><i className="far fa-star"></i>
                                        </div>
                                    </div>

                                    <div className="col-md-1 px-2 product-detail-info-container-user-container-bid"
                                         style={{height: '6rem'}}>
                                        <div className="row">
                                            <span
                                                className="product-detail-info-container-user-container-price text-warning">356</span>
                                        </div>
                                        <div className="row product-detail-info-container-user-container-actions">
                                            <button className="badge badge-pill badge-primary mx-auto">CONFORM</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="row product-detail-info-container-user-container p-2">

                                    <div
                                        className="col-2 product-detail-info-container-user-container-user p-0 text-center"
                                        style={{height: '7rem'}}>
                                        <img
                                            className="product-detail-info-container-user-container-user_img rounded-lg"
                                            src="../../assets/img/avatars/user4.jpg" alt="user"
                                            style={{height: '70%', width: '100%'}}/>
                                        <h6 className="product-detail-info-container-user-container-user_name">hello_2020</h6>
                                    </div>
                                    <div className="col-7 mx-3 product-detail-info-container-user-container-comment"
                                         style={{height: '6rem'}}>
                                        <div
                                            className="row bg-primary product-detail-info-container-user-container-comment_words p-2 text-white overflow-auto rounded-lg"
                                            style={{height: '60%'}}>
                                            I really need this phone cuz I really don't have too many budget to get a
                                            new iphone! This's all what I have, guys,
                                            please left this for me! Many thanks!!!!!
                                        </div>
                                        <div
                                            className="row mt-3 product-detail-info-container-user-container-comment_rates text-success">
                                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                            className="fas fa-star"></i><i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                            className="fas fa-star"></i><i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i><i className="far fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="col-md-1 px-2 product-detail-info-container-user-container-bid"
                                         style={{height: '6rem'}}>
                                        <div className="row">
                                            <span
                                                className="product-detail-info-container-user-container-price text-warning">240</span>
                                        </div>
                                        <div className="row product-detail-info-container-user-container-actions">
                                            <button className="badge badge-pill badge-primary mx-auto">CONFORM</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-4 product-detail-info-container_side bg-primary"></div>
                        </div>
                    </div>
                </div>
                <div className="row product-detail-ad-container bg-danger">
                </div>
                <div className="row product-detail-description-container bg-warning my-2">
                    <h2 className="m-2">Description</h2>
                    <div className="m-2 product-detail-description">
                        <p>The iPhone 4 is a smartphone that was designed and marketed by Apple Inc. It is the fourth
                            generation iPhone, succeeding the 3GS and preceding the 4S. Following a number of notable
                            leaks, the iPhone 4 was first unveiled on June 7, 2010, at Apple's Worldwide Developers
                            Conference in San Francisco,[8] and was released on June 24, 2010, in the United States,
                            United Kingdom, France, Germany, and Japan. The iPhone 4 introduced a new hardware design
                            to the iPhone family, which Apple's CEO Steve Jobs touted as the thinnest smartphone in
                            the world at the time; it consisted of a stainless steel frame which doubles as an antenna,
                            with internal components situated between aluminosilicate glass.[9] The iPhone 4 also
                            introduced Apple's new high-resolution "Retina Display" with a pixel density of 326 pixels
                            per inch while maintaining the same physical size and aspect ratio as its precursors.
                            The iPhone 4 also introduced Apple's A4 system-on-chip, along with iOS 4—which notably
                            introduced multitasking functionality and Apple's new FaceTime video chat service. The
                            iPhone 4 was also the first iPhone to include a front-facing camera, and the first to
                            be released in a version for CDMA networks, ending AT&T's period as the exclusive carrier
                            of iPhone products in the United States.</p>
                    </div>
                </div>
            </div>
        </div>
    </>

);

export default ProductDetail;