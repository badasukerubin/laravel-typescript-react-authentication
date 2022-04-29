import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../service/Auth.service";
import {
    useNavigate,
    NavigateFunction,
    useLocation,
    Location,
} from "react-router-dom";

const Header = (): JSX.Element => {
    let [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    let navigate: NavigateFunction = useNavigate();
    let location: Location = useLocation();

    useEffect(() => {
        AuthService.getUser()
            .then((response) => {
                if (
                    location.pathname === "/login" ||
                    location.pathname === "/register"
                ) {
                    navigate("/dashboard");
                }
                console.log(response);

                setIsLoggedIn(true);
            })
            .catch((e) => {
                if (
                    e.response.data.message === "Unauthenticated." &&
                    location.pathname === "/dashboard"
                ) {
                    navigate("/login");
                }

                setIsLoggedIn(false);
            });
    }, []);

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Index</Link>
                </li>
                {isLoggedIn ? (
                    <li>
                        <Link to="/dashboard">Dashboard</Link> |{" "}
                        <Link to="/logout">Logout</Link>
                    </li>
                ) : (
                    <li>
                        <Link to="/login">Login</Link> |{" "}
                        <Link to="/register">Register</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Header;
