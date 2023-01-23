import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { NavLink } from 'react-router-dom';
import useFirebaseMongo from './../../Hooks/useFirebaseMongo';
import './Slider.css';


const SliderComponent = () => {
    const { mongodb: { sliderData } } = useFirebaseMongo();
    return (

        <div className="slider">

            {
                sliderData.length > 0 ?

                    
                <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
                        {sliderData?.map(item => {
                            return (
                                <div key={item?._id} className="slider-item h-screen flex items-center flex-col justify-center" style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.36), rgba(0, 0, 0, 0.36)), url(${item?.image})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}>
                                <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-white mb-7"> {item.name} </h1>
                                <button className="outline-none px-6 py-3 border-2 border-puerto-600 text-white hover:bg-puerto-600">
                                    <NavLink to="/tour">Explore Now </NavLink>
                                </button>
                            </div>      
                                )
                            })}
                            </Carousel>
                    
                    : 
                    <div className="h-screen flex justify-center  items-center">
                    <img className="" src="https://assets.materialup.com/uploads/fa8430a1-4dea-49d9-a4a3-e5c6bf0b2afb/preview.gif" alt="" />
                    </div>
            }
        </div>


    )
}

export default SliderComponent;