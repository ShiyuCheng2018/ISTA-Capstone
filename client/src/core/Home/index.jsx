import React, {Component} from "react";
import HomeNav from "../HomeNav";
import HomeCategory from "../../components/HomeCategory";
import HomeProducts from "../../components/HomeProductShow";

class Index extends Component {

    componentDidMount() {
        document.title = "MonkeyDock | Index"
    }

    render(){
        return(
            <>
                <HomeNav/>
                < HomeCategory />
                < HomeProducts />
            </>
        )
    }
}

export default Index;