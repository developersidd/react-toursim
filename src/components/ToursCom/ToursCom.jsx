import { AccessTime, Star, StarBorderOutlined } from "@mui/icons-material";
import React from 'react';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';
import useFirebaseMongo from '../../Hooks/useFirebaseMongo';
import './TourCom.css';
const ToursCom = () => {

    const { mongodb: { tourData, isFetching } } = useFirebaseMongo();

    return (
        <div className="container mx-auto p-4 md:p-10">
            <h3 className="text-center text-4xl font-medium mb-10">Our Tour packages </h3>

            {
                isFetching && tourData.length <= 0 && <div className="h-screen flex justify-center  items-center">
                    <img className="" src="https://assets.materialup.com/uploads/fa8430a1-4dea-49d9-a4a3-e5c6bf0b2afb/preview.gif" alt="" />
                </div>
            }

            <div className="grid md:grid-cols-3 md:gap-x-5 gap-y-10">

                {
                    tourData.map(({ _id, image, name, country, price, rating, review, duration, description }) => (
                        <div key={_id} className="tour-item relative p-3 shadow rounded-md hover:shadow-lg">
                            <img className="w-full h-48 rounded-md" src={image} alt={name} />
                            <button className="absolute top-12 left-7 px-4 rounded-full py-1  bg-red-500 text-white">${price} </button>
                            <div className="p-3">
                                <div>
                                    <div className="flex justify-between items-center mb-3">
                                        <div>
                                            <h3 className="font-medium text-lg text-gray-600">{name} </h3>
                                            <span className="text-sm text-gray-500">{country} </span>
                                        </div>
                                        <button className="px-3 rounded-full py-1  bg-red-500 text-white">
                                            <NavLink to={`/tour_details/${_id}`}>
                                                Order Now
                                            </NavLink>
                                        </button>
                                    </div>
                                    <p className="mb-2">{description?.slice(0, 60)}... </p>

                                </div>
                                <div className="flex items-center justify-between">
                                    <span>
                                        <Rating
                                            className="text-yellow-400"
                                            initialRating={rating}
                                            emptySymbol={<StarBorderOutlined />}
                                            fullSymbol={<Star />}
                                            readonly
                                        />
                                        <span>
                                            ({review} review)
                                        </span>

                                    </span>
                                    <span className="font-medium"><AccessTime className="text-crimson-600" style={{ transform: "scale(.80)" }} />   {duration} {duration > 1 ? "days" : "day"}  </span>
                                </div>
                            </div>
                        </div>
                    )
                    )}

            </div>
        </div>
    )
}

export default ToursCom
