import React from "react";

const HomeCategory = () =>(

    <>
        <div className="container" style={{height: 'auto'}}>
            <div className="row h-100 my-4">
                <div className="col-md-3" style={{border: '1px #ededed solid'}}>
                    <div className="row title bg-warning" style={{height: '8%'}}>
                        <h4 className="col text-uppercase my-auto font-weight-bold"
                            style={{fontFamily:'Dosis,sans-serif'}}>Categories</h4>
                        <h4 className="col-2 my-auto ml-auto"><i className="fas fa-list-ul "></i></h4>
                    </div>
                    <div className="row mt-3 category-list-container" style={{height: '89%'}}>
                        <div className="col category-list">
                            <div className="row">
                                <button className="btn w-100 rounded-0 text-left pl-3 py-2 category-list-btn">Iphone
                                </button>
                            </div>
                            <div className="row">
                                <button className="btn w-100 rounded-0 text-left pl-3 py-2 category-list-btn">MacBook
                                </button>
                            </div>
                            <div className="row">
                                <button className="btn w-100 rounded-0 text-left pl-3 py-2 category-list-btn">Air Pods
                                </button>
                            </div>
                            <div className="row">
                                <button className="btn w-100 rounded-0 text-left pl-3 py-2 category-list-btn">Lenovo
                                    Products
                                </button>
                            </div>
                            <div className="row">
                                <button
                                    className="btn w-100 rounded-0 text-left pl-3 py-2 category-list-btn">Microsoft
                                </button>
                            </div>
                            <div className="row">
                                <button className="btn w-100 rounded-0 text-left pl-3 py-2 category-list-btn">Bikes
                                </button>
                            </div>
                            <div className="row">
                                <button className="btn w-100 rounded-0 text-left pl-3 py-2 category-list-btn">Bags
                                </button>
                            </div>
                            <div className="row">
                                <button className="btn w-100 rounded-0 text-left pl-3 py-2 category-list-btn">Jewelry
                                </button>
                            </div>
                            <div className="row">
                                <button className="btn w-100 rounded-0 text-left pl-3 py-2 category-list-btn">Vehicles
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
                <div className="col col-md-8 ">
                    <div className="row">
                        <div className="owl-carousel owl-theme banner-container_carousel">
                            <div className="item"><img src="assets/img/banners/slider-01-880x500.jpg"
                                                       alt="product small"/></div>
                            <div className="item"><img src="assets/img/banners/slider-02-880x500.jpg"
                                                       alt="product small"/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>


);

export default HomeCategory;