import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {isAuthenticated} from "../../auth";
import Card from "../../components/Card";
import {fetchUser} from "../../api/users";
import {Form} from "reactstrap";


const MyProducts = () => {




    function toMap(products){
        return products.map((product, i) => {
            return (
                <>
                    <div className="col col-4 py-3 single-product_review">
                        <Card product={product}/>
                    </div>
                </>
            )
        })
    }


    const [user, setUser] = useState({
        products: []
    });

    const handleUser = () => {
        const token = isAuthenticated().jwt;
        const id = isAuthenticated().basic.user_id;
        console.log("fetch info from my products");
        fetchUser(token, id).then(data=>{
            if(data.err){
                console.log(data.err)
            }else {
                console.log(data);
                setUser( {products: data.products}
                )
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

    const products = user.products;
    return (<>
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

                    {
                        !products.length>0 ? <h2 className={"col"}>You don't have any products yet..Please add your products....</h2> : (toMap(products))
                    }

                    {/*    <div className="col col-4 py-3 single-product_review">*/}
                    {/*    <div className="card h-100">*/}
                    {/*        <img src="../../assets/img/products/product_1.jpg" className="card-img-top"*/}
                    {/*             alt="product_review"/>*/}
                    {/*        <div className="card-body">*/}
                    {/*            <div className="row px-3">*/}
                    {/*                <h5 className="card-title ">iPhone 4s</h5>*/}
                    {/*                <h5 className="card-title ml-auto text-uppercase">Goal: <span*/}
                    {/*                    className="text-success">110.00 $</span></h5>*/}
                    {/*            </div>*/}
                    {/*            <hr/>*/}
                    {/*            <div className="card-text overflow-auto" style={{height: '13rem'}}>*/}

                    {/*                <div className="row m-2 single-comment text-center">*/}
                    {/*                    <div className="col-6">*/}
                    {/*                        <h5>Nihao:</h5>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="col text-success">*/}
                    {/*                        150.00 $*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}

                    {/*                <div className="row m-2 single-comment text-center">*/}
                    {/*                    <div className="col-6">*/}
                    {/*                        <h5>user_2:</h5>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="col text-success">*/}
                    {/*                        150.00 $*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}

                    {/*                <div className="row m-2 single-comment text-center">*/}
                    {/*                    <div className="col-6">*/}
                    {/*                        <h5>Nihao:</h5>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="col text-success">*/}
                    {/*                        143.00 $*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}

                    {/*                <div className="row m-2 single-comment text-center">*/}
                    {/*                    <div className="col-6">*/}
                    {/*                        <h5>user_2:</h5>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="col text-success">*/}
                    {/*                        113.56 $*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}

                    {/*                <div className="row m-2 single-comment text-center">*/}
                    {/*                    <div className="col-6">*/}
                    {/*                        <h5>Nihao:</h5>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="col text-warning">*/}
                    {/*                        100.00 $*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}

                    {/*                <div className="row m-2 single-comment text-center">*/}
                    {/*                    <div className="col-6">*/}
                    {/*                        <h5>user_2:</h5>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="col text-success text-warning">*/}
                    {/*                        98.34 $*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}

                    {/*                <div className="row m-2 single-comment text-center">*/}
                    {/*                    <div className="col-6">*/}
                    {/*                        <h5>Nihao:</h5>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="col text-warning">*/}
                    {/*                        67.84 $*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}

                    {/*                <div className="row m-2 single-comment text-center">*/}
                    {/*                    <div className="col-6">*/}
                    {/*                        <h5>user_2:</h5>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="col text-warning">*/}
                    {/*                        63.40 $*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}

                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <Link className="single-product_detail_link" to={`/user/${isAuthenticated().user_id}/products/1`}>*/}
                    {/*            <button className="btn btn-primary single-product_detail w-100">Detail</button>*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </div>
            </div>
        </div>


        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Product</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">


                        <form className={"text-dark"}>
                            <div className="form-group">
                                <label htmlFor="name">name</label>
                                <input className="form-control" id="name" placeholder="What you want to sell?"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="condition">Condition</label>
                                <select className="form-control" id="condition">
                                    <option>Almost New</option>
                                    <option>Great</option>
                                    <option>Good</option>
                                    <option>Noticeable</option>
                                    <option>Need to fix</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Category">Category</label>
                                <select className="form-control" id="Category">
                                    <option>Desktop</option>
                                    <option>Vehicle</option>
                                    <option>Mobile</option>
                                    <option>Laptop</option>
                                    <option>Bike</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Goal Price</label>
                                <input type="number" id="price" className="ml-3"/> $
                            </div>
                            <div className="form-group">
                                <label htmlFor="qty">Quantity</label>
                                <input type="number" id="qty" className="ml-3"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Description</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                placeholder={"Please describe your product..."}
                                />
                            </div>
                        </form>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </div>
        </div>


    </>)

};

export default MyProducts;