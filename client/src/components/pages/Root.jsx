import React from "react";
import MyNavBar from "../Navbar";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";


export default function Root({setUserObj}) {
    const {isAuthenticated, user } = useAuth0();

   console.log(user.name);
    const sendUser = (user) => {
        fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({ user }),
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((response) => response.json()) //we want to get the response convert to json
            .then((data) => {
                //get that data and
                console.log(data);
            });
    };

    // const handleLogin = async () => {
    //     await loginWithRedirect({
    //       appState: {
    //         returnTo: "/", //went to user profile before
    //       },
    //     });
    //     setUserObj(user); //// Pass the user object to setUserObj
    //     //Pass the user data to the target page using URL parameters
    //   };

    useEffect(() => {
        if (isAuthenticated) {
            setUserObj(user); // Set the user object after successful login
            sendUser(user);
        }
    }, [isAuthenticated, user, setUserObj]);
    return (
        <>
            <div>
                <MyNavBar />
                <div>
                    <Outlet />
                </div>
            </div>
        </>
    );
};