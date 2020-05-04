import React, {useEffect, useState} from "react";
import {fetchProducts} from "../../api/products";
import {isAuthenticated} from "../../auth";


    // const {products, setProducts} = useState({});

const renderCard = (product) => {
    return(
        <>
            <a href="User/seller/productDetail.html" className="m-3 card p-0" style={{height: 'auto', width:"250px"}}>
                <div className="p-0 m-0 bg-danger" style={{height: '50%', overflow: 'hidden'}}>
                    <img src={process.env.REACT_APP_API_STRAPI+`${product.picture[0].formats.thumbnail.url}`} alt="product" />
                </div>
                <div className="card-body p-2">
                    <h4>{product.name}</h4>
                    <h6 style={{opacity: .6}}>128GB+8GB+6.7inch+ios13.3</h6>
                    <h3>$ $$$ <span style={{fontSize: 10, opacity: .8}}>({product.bids.length} bids)</span></h3>
                    <h6 className="font-italic">03/23/2020 <span style={{fontSize: '10px', opacity: .8}}>condition: {product.condition}</span>
                    </h6>
                </div>
            </a>
        </>
    )
};

const toMap = (products) =>{
    return products.map(product => {
        return renderCard(product)
    })
};


const HomeProducts= (props) =>(
    <>
        {/*{console.log(products.products)}*/}
        <div className="container my-5 cards-section">
            <div className={"row"}>
                    {toMap(props.products)}
                    {toMap(props.products)}
            </div>
        </div>
    </>
);

export default HomeProducts;