import React from 'react';
import MainRouter from "../MainRouter";

const Footer = () => (
    <div className="footer container-fluid bg-dark text-white p-0" style={{height: 'auto'}}>
        <div className="row m-0 p-2">
            <div className="col-md-4 col-12 mx-auto my-0">
                <div className="row mx-4 mt-4"><h4>Max Tech</h4></div>
                <div className="row mx-4"><p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit..
                    Neque porro quisquam .Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>
                <div className="row mx-4">
                    <ul className="list-unstyled list-inline text-center">
                        <li className="list-inline-item">
                            <a className="btn-floating btn-fb mx-1">
                                <i className="fab fa-facebook-f"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-tw mx-1">
                                <i className="fab fa-twitter"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-gplus mx-1">
                                <i className="fab fa-google-plus-g"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-li mx-1">
                                <i className="fab fa-linkedin-in"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-dribbble mx-1">
                                <i className="fab fa-dribbble"> </i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="col-md-6 mx-auto col my-0">
                <div className="row m-4">
                    <div className="col">
                        <h5 className="text-uppercase">Extras</h5>
                        <ul className="p-1 list-unstyled">
                            <li className="text-primary text-muted">Brands</li>
                            <li className="text-primary text-muted">Specials</li>
                            <li className="text-primary text-muted">Site Map</li>
                            <li className="text-primary text-muted">Contact Us</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5 className="text-uppercase">Information</h5>
                        <ul className="p-1 list-unstyled">
                            <li className="text-primary text-muted">About Us</li>
                            <li className="text-primary text-muted">Delivery</li>
                            <li className="text-primary text-muted">Privacy</li>
                            <li className="text-primary text-muted">Term & Conditions</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5 className="text-uppercase">Contact Us</h5>
                        <ul className="p-1 list-unstyled">
                            <li className="text-primary text-muted"><i className="fas fa-map-marker-alt"></i> 550 N 5th
                                Ave., Tucson, Az
                            </li>
                            <li className="text-primary text-muted"><i className="fas fa-phone"></i>(520)3891140</li>
                            <li className="text-primary text-muted"><i className="far fa-envelope"></i>shiyucheng@email.arizona.edu
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;