import React from "react";
import MyNavBar from "../Navbar";
import { Outlet } from "react-router-dom";
import Home from "./Home";
import ListStudents from "../ListStudents";

export default function Root(){
    return(
        <div className="App">
        <MyNavBar/>
        {/*<ListStudents/>*/}
        {/* <Home/> */}
        <Outlet/>
        </div>
    );
};