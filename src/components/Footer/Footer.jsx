import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../../images/flight.png";
import img from "../../images/Paypa-e1541212828289.png";
const Footer = () => {
    return (
        <div className="px-10 md:px-20" style={{ backgroundColor: "#0E2737" }}>
            <div className="py-20 container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <img className="inline" src={logo} alt="" />
                    <span className="inline text-white ml-2 font-semibold text-lg">ABTourism </span>
                    <h3 className="mt-5 text-gray-400">+10 385-147-99789 </h3>
                    <span className="text-gray-400">Info.abtourism@gmail.com </span>
                    <p className="text-gray-400">856 road california. 356, USA.
                    </p>
                </div>
                <div>
                    <h3 className="text-white font-semibold text-xl mb-4">OUR BLOGS </h3>
                    <span className="text-gray-400">How to select the best place for tour? </span>
                    <p className="text-gray-400 mb-4">Feb 08,2021 </p>
                    <span className="text-gray-400">How to roam many places in affordable? </span>
                    <p className="text-gray-400">Mar 09,2021 </p>
                </div>
                <div>
                    <h3 className="text-white font-semibold text-xl mb-4">LINKS </h3>
                    <ul className="text-gray-400">
                        <li className="hover:text-puerto-500">
                            <NavLink activeClassName="font-semibold" to="/">Home </NavLink>
                        </li>
                        <li className="hover:text-puerto-500">
                            <NavLink activeClassName="font-semibold" to="/tour">Tours </NavLink>
                        </li>
                        <li className="hover:text-puerto-500">
                            <NavLink activeClassName="font-semibold" to="/destination">Destination </NavLink>
                        </li>
                        <li className="hover:text-puerto-500">
                            <NavLink activeClassName="font-semibold" to="/my_orders">My Orders </NavLink>
                        </li>
                        <li className="hover:text-puerto-500">
                            <NavLink activeClassName="font-semibold" to="/manage_all_orders">Manage All Orders </NavLink>
                        </li>
                        <li className="hover:text-puerto-500">
                            Privacy & Policy
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4"> PAYMENT GETWAT OPTION </h3>
                    <img className="h-40" src={img} alt="" />
                </div>
            </div>
            <div className="text-center pb-6  border-t-2">
                <p className="text-gray-300 mt-6"> Copyright ©2021 abtourism.com |  All rights reserved | This design is made by ab.siddik  </p>
            </div>
        </div>
    )
}

export default Footer
