import React from "react";
import MyNavBar from "../Navbar";
import { Outlet } from "react-router-dom";
import Home from "./Home";

export default function Root(){
    return(
        <div className="App">
        <MyNavBar/>
        <Home/>
        <Outlet/>
        </div>
    );
};