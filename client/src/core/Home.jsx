import React from "react";
import HomeNav from "./HomeNav";
import HomeCategory from "../components/HomeCategory";
import HomeProducts from "../components/HomeProductShow";


const Home = () => (
    <>
        <HomeNav/>
        <HomeCategory/>
        <HomeProducts/>
    </>
);

export default Home;