import React from "react";
import MyNavBar from "../Navbar";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";


export default function Root({ setUserObj }) {

    const { isAuthenticated, user } = useAuth0();

    //sends user to the backend
    const sendUser = (user) => {
        fetch("/api/user", {
            method: "POST",
            body: JSON.stringify({ user }),
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((response) => response.json());
    };

    useEffect(() => {
        if (isAuthenticated) {
            setUserObj(user);
            sendUser(user);
        }
    }, [isAuthenticated, user, setUserObj]);

    return (
        <div>
            <MyNavBar />
            <div>
                <Outlet />
            </div>
        </div>
    );
};