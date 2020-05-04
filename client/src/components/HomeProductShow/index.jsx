import React, {useEffect, useState} from "react";
import {fetchProducts} from "../../api/products";
import {isAuthenticated} from "../../auth";


    // const {products, setProducts} = useState({});


const toMap = (products) =>{
    return products.map((product, i) => {
        console.log(product.picture[0] === undefined? console.log("bad") : console.log(product.picture[0].name));
        return(
            <>
                <a href="User/seller/productDetail.html" key={i} className="m-3 card p-0" style={{height: 'auto', width:"250px"}}>
                    <div className="p-0 m-0 bg-danger" style={{height: '50%', overflow: 'hidden'}}>
                        {
                            product.picture[0] === undefined?
                                <img src = "assets/img/products/default.jpg" alt="product"
                                /> :
                                <img src={process.env.REACT_APP_API_STRAPI+`${product.picture[0].url}`} alt="product"
                                     onError={i => (i.target.src = "assets/img/products/default.jpg")}
                                />
                        }
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
    })
};

const HomeProducts= (props) =>{
   console.log(props);
    return (<>

        <div className="container my-5 cards-section">
                <div className={"row"}>
                    {props.item_load? <h2>Item Loading....</h2> :
                        toMap(props.products)
                    }
                </div>
        </div>
    </>)

};

export default HomeProducts;