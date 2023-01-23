import React from 'react'
import img from "../images/undraw_adventure_-4-hum (1).svg";
const About = () => {
    return (
        <div className="container mx-auto py-20">
            <div className="flex flex-col md:flex-row  items-center justify-between gap-7 ">
                <div className="md:w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="md:w-1/2">
                    <h3 className="text-2xl text-puerto-600 font-semibold">About us </h3>
                    <p className="mb-3">
                        New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan,
                        Bali is the only Hindu-majority province in Muslim-majority Indonesia, with 86.9% of the population adhering to Balinese Hinduism.[3] It is renowned for its highly developed arts, including traditional and modern dance, sculpture, painting, leather, metalworking,
                    </p>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">CEO: AB Siddik </h1>
                </div>
            </div>
        </div>
    )
}

export default About
