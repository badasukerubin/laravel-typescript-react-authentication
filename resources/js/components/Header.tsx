import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = (): JSX.Element => {
    let [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Index</Link>
                </li>
                {isLoggedIn ? (
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
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
