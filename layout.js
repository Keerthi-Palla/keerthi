import React from "react";
import { Outlet,Link } from "react-router-dom";
const Form=() => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Regestration</Link>
                </li>
                    <li>
                        <Link to="/ login">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
            </ul>
        </nav>
        <Outlet></Outlet>
        </>
    );
}
export default Form;