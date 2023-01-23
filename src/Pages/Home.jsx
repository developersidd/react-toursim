import React from 'react'
import Newsletter from '../components/Newsletter/Newsletter'
import SliderComponent from '../components/Slider/Slider'
import ToursCom from '../components/ToursCom/ToursCom'
import About from './About'

const Home = () => {
    return (
        <div>
            <section>
                <SliderComponent />
                <About />
                <ToursCom />
                <Newsletter />
            </section>
        </div>
    )
}

export default Home
