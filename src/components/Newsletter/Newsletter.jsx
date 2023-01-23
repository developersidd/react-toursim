import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <div className="newsletter my-24">
            <div className="container py-14 md:py-0 md:h-72 mx-auto px-6  md:px-36 flex flex-col md:flex-row  md:items-center md:justify-between">
                <div>
                    <h3 className="text-2xl md:text-3xl font-semibol2d text-white mb-4">Subscribe Our Newsletter </h3>
                    <span className="text-white md:text-lg">Subscribe newsletter to get offers and <br /> about new places to discover. </span>
                </div>
                <div className="mt-10 md:mt-0 md:ml-10">
                    <form>
                        <input className="outline-none px-6 py-3  w-96 mr-6 rounded-md" type="text" placeholder="your Email address" />
                        <input onClick={(e) => e.preventDefault() } className="cursor-pointer bg-red-500 text-white mt-4 md:mt-0  px-6 py-3 rounded-md font-semibold hover:bg-puerto-600" type="submit" value="Subscribe" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;