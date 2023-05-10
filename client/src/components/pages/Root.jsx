import React from "react";
import MyNavBar from "../Navbar";
import Game from "./Game";
export default function Root(){
    return(
        <div className="App">
        <MyNavBar/>
        <Game/>
        </div>
    );
};