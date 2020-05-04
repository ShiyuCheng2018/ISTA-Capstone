import React, {Component} from "react";
import HomeNav from "../HomeNav";
import HomeCategory from "../../components/HomeCategory";
import HomeProducts from "../../components/HomeProductShow";
import {fetchProducts} from "../../api/products";

class Index extends Component {

    constructor(){
        super();
        this.state={
            products: [],
            item_load: true
        }
    }


    componentDidMount() {
        document.title = "MonkeyDock | Home";
        fetchProducts().then(data =>{
            if(data.err){
                console.log(data.err)
            }else {
                this.setState({products: data, item_load:false})
            }
        }).catch(err => {
            console.log(err);
        });
    }

    render(){
        return(
            <>
                <HomeNav/>
                < HomeCategory/>
                < HomeProducts  products = {this.state.products} item_loading = {this.state.item_load}/>
            </>
        )
    }
}

export default Index;