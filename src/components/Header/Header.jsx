import { ExitToApp } from "@mui/icons-material";
import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebaseMongo from '../../Hooks/useFirebaseMongo';
import logo from "../../images/flight.png";
import "./Header.css";

const Header = () => {
    const { firebase: { firebaseData, logOut , isAdmin} } = useFirebaseMongo();
    return (
        <div className="shadow-md">
            <div className="h-20 container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center">
                <div>
                    <NavLink className="flex items-center" to="/">
                        <img className="w-6 md:w-12" src={logo} alt="logo" />
                        <span className="ml-2 font-semibold md:text-lg">ABTourism </span>
                    </NavLink>
                </div>

                <div>
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-7">
                            <li className="hover:text-red-500">
                                <NavLink className={({ isActive }) => isActive ? "font-semibold text-red-500" : ""} to="/">Home </NavLink>
                            </li>
                            <li className="hover:text-red-500">
                                <NavLink className={({ isActive }) => isActive ? "font-semibold text-red-500" : ""} to="/tour">Tours </NavLink>
                            </li>
                            <li className="hover:text-red-500">
                                <NavLink className={({ isActive }) => isActive ? "font-semibold text-red-500" : ""} to="/about">About us </NavLink>
                            </li>

                            <li className="hover:text-red-500">
                                <NavLink className={({ isActive }) => isActive ? "font-semibold text-red-500" : ""} to="/my_orders">My Orders </NavLink>
                            </li>

                            {
                                  isAdmin &&
                               ( <>
                                    <li className="hover:text-red-500">
                                        <NavLink className={({ isActive }) => isActive ? "font-semibold text-red-500" : ""} to="/manage_all_orders">Manage All Orders </NavLink>
                                    </li>

                                    <li className="hover:text-red-500">
                                        <NavLink className={({ isActive }) => isActive ? "font-semibold text-red-500" : ""} to="/add_a_tour">Add a Tour </NavLink>
                                    </li>

                                    <li className="hover:text-red-500">
                                        <NavLink className={({ isActive }) => isActive ? "font-semibold text-red-500" : ""} to="/make_admin">Make Admin </NavLink>
                                    </li>
                                </>)
                            }

                        </ul>
                    </nav>
                </div>
                <div className="hidden md:block">
                    <ul className="flex items-center gap-5">

                        {
                            firebaseData.email ?
                                <>
                                    <span>{firebaseData.displayName} </span>
                                    <img
                                        className="w-12 h-12 rounded-full"
                                        src={firebaseData?.photoURL ? firebaseData?.photoURL
                                            : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png"
                                        }
                                        alt="profile" />
                                    <li onClick={logOut} className="hover:text-puerto-500">
                                        <NavLink to="/"> <ExitToApp className="log-out" /> </NavLink>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="hover:text-white hover:bg-red-600 px-6 py-1.5 border-2  rounded-full">
                                        <NavLink activeClassName="font-medium" to="/login">Login </NavLink>
                                    </li>

                                    <li className="hover:bg-red-600 text-white px-6 py-2  border-2  bg-red-500 rounded-full">
                                        <NavLink activeClassName="font-medium" to="/signup">Register </NavLink>
                                    </li>
                                </>
                        }

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
