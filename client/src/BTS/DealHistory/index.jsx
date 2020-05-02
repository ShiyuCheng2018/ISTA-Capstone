import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Link} from "react-router-dom";
import {isAuthenticated} from "../../auth";


const DealHistory = () =>(

    <>
        <div className="row bg-light text-dark overflow-auto" style={{height: 'auto'}}>
            <div className="col">
                <div className="row">
                    <div className="col-5">
                        <h1 className="py-2"><span>Deal History</span></h1>
                    </div>
                </div>

                <div className="row histories-section">

                    <ul className="list-unstyled m-3 histories-container">
                        <li className="media history">
                            <div className="media-body">
                                <div className="row">
                                    <div className="col col-2">
                                        <Link to={`/user/${isAuthenticated().user_id}/products/1`}>
                                            <img src="../../assets/img/products/product_1.jpg"
                                                 className="mr-3 h-100 w-100" alt="..."/>
                                        </Link>
                                    </div>
                                    <div className="col col">
                                        <h5 className="mt-0 mb-1">iPhone 4s
                                            <span className="badge badge-primary">$ 560</span>
                                        </h5>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                        sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                        turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
                                        felis in faucibus.
                                        <h4 className="">
                                            <img src="../../assets/img/avatars/user1.jpg" className="mr-3" alt="..."
                                                 height="40px" width="40px"/>
                                                <span className="badge badge-light">23/07/2019</span>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="media history my-4">
                            <div className="media-body">
                                <div className="row">
                                    <div className="col col-2">
                                        <a href="productDetail.html">
                                            <img src="../../assets/img/products/product_2.jpg"
                                                 className="mr-3 h-100 w-100" alt="..."/>
                                        </a>
                                    </div>
                                    <div className="col col">
                                        <h5 className="mt-0 mb-1">iPhone 4s
                                            <span className="badge badge-primary">$ 560</span>
                                        </h5>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                        sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                        turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
                                        felis in faucibus.
                                        <h4 className="">
                                            <img src="../../assets/img/avatars/user4.jpg" className="mr-3" alt="..."
                                                 height="40px" width="40px"/>
                                                <span className="badge badge-light">23/07/2019</span>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="media history my-4">
                            <div className="media-body">
                                <div className="row">
                                    <div className="col col-2">
                                        <a href="productDetail.html">
                                            <img src="../../assets/img/products/product_3.jpg"
                                                 className="mr-3 h-100 w-100" alt="..."/>
                                        </a>
                                    </div>
                                    <div className="col col">
                                        <h5 className="mt-0 mb-1">iPhone 4s
                                            <span className="badge badge-primary">$ 560</span>
                                        </h5>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                        sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                        turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
                                        felis in faucibus.
                                        <h4 className="">
                                            <img src="../../assets/img/avatars/user3.jpg" className="mr-3" alt="..."
                                                 height="40px" width="40px"/>
                                                <span className="badge badge-light">23/07/2019</span>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </li>
                     >
                        <li className="media history my-4">
                            <div className="media-body">
                                <div className="row">
                                    <div className="col col-2">
                                        <a href="productDetail.html">
                                            <img src="../../assets/img/products/product_6.jpg"
                                                 className="mr-3 h-100 w-100" alt="..."/>
                                        </a>
                                    </div>
                                    <div className="col col">
                                        <h5 className="mt-0 mb-1">iPhone 4s
                                            <span className="badge badge-primary">$ 560</span>
                                        </h5>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                        sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                        turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
                                        felis in faucibus.
                                        <h4 className="">
                                            <img src="../../assets/img/avatars/user4.jpg" className="mr-3" alt="..."
                                                 height="40px" width="40px"/>
                                                <span className="badge badge-light">23/07/2019</span>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="media history my-4y">
                            <div className="media-body">
                                <div className="row">
                                    <div className="col col-2">
                                        <a href="productDetail.html">
                                            <img src="../../assets/img/products/product_6.jpg"
                                                 className="mr-3 h-100 w-100" alt="..."/>
                                        </a>
                                    </div>
                                    <div className="col col">
                                        <h5 className="mt-0 mb-1">iPhone 4s
                                            <span className="badge badge-primary">$ 560</span>
                                        </h5>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                        sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                        turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
                                        felis in faucibus.
                                        <h4 className="">
                                            <img src="../../assets/img/avatars/user3.jpg" className="mr-3" alt="..."
                                                 height="40px" width="40px"/>
                                                <span className="badge badge-light">23/07/2019</span>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="media history my-4">
                            <div className="media-body">
                                <div className="row">
                                    <div className="col col-2">
                                        <a href="productDetail.html">
                                            <img src="../../assets/img/products/product_5.jpg"
                                                 className="mr-3 h-100 w-100" alt="..."/>
                                        </a>
                                    </div>
                                    <div className="col col">
                                        <h5 className="mt-0 mb-1">iPhone 4s
                                            <span className="badge badge-primary">$ 560</span>
                                        </h5>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                        sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                        turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
                                        felis in faucibus.
                                        <h4 className="">
                                            <img src="../../assets/img/avatars/user3.jpg" className="mr-3" alt="..."
                                                 height="40px" width="40px"/>
                                                <span className="badge badge-light">23/07/2019</span>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="media history">
                            <div className="media-body">
                                <div className="row">
                                    <div className="col col-2">
                                        <a href="productDetail.html">
                                            <img src="../../assets/img/products/product_4.jpg"
                                                 className="mr-3 h-100 w-100" alt="..."/>
                                        </a>
                                    </div>
                                    <div className="col col">
                                        <h5 className="mt-0 mb-1">iPhone 4s
                                            <span className="badge badge-primary">$ 560</span>
                                        </h5>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                        sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                        turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
                                        felis in faucibus.
                                        <h4 className="">
                                            <img src="../../assets/img/avatars/user3.jpg" className="mr-3" alt="..."
                                                 height="40px" width="40px"/>
                                                <span className="badge badge-light">23/07/2019</span>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>

);

export default DealHistory;