import axios from 'axios';
import { useEffect, useState } from 'react';

const useMongodb = () => {
    const [sliderData, setSliderData] = useState([]);
    const [tourData, setTourData] = useState([]);
    const [isFetching, setIsFetching] = useState(true);


    // slider data
    useEffect(() => {
        setIsFetching(true);
        axios.get("http://localhost:5000/sliders_data")
            .then(res => {
                setSliderData(res.data);
                setIsFetching(false);
            })
    }, []);

    // Tour data
    useEffect(() => {
        setIsFetching(true);
        axios.get("http://localhost:5000/tours")
            .then(res => {
                setIsFetching(false);
                setTourData(res.data);
            });
    }, []);

    return { sliderData, tourData, isFetching, setIsFetching };
}

export default useMongodb;
