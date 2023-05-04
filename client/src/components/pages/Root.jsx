import React from "react";
import MyNavBar from "../Navbar";
import { Outlet } from "react-router-dom";

export default function Root(){
    return(
        <div className="App">
        <MyNavBar/>
        <Outlet/>
        </div>
    );
};