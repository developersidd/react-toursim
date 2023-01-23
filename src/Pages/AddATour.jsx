import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import sweetalert from "sweetalert";
import useFirebaseMongo from '../Hooks/useFirebaseMongo';

const AddATour = () => {
    //const [data, setData] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { firebase: { firebaseData } } = useFirebaseMongo();

    const onSubmitFunction = (data) => {
        axios.post(`http://localhost:5000/add_tour/${firebaseData.email}`, data, {
            headers: { 'authorization': `Bearer ${localStorage.getItem("idToken")}` }
        })
            .then(res => {
                sweetalert("Superb!", "Tour Added successfully", "success");
                reset();
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            });
    }

    return (
        <div>
            <div className="w-1/2 my-16 mx-auto">
                <div className="bg-white  rounded-md overflow-hidden shadow-md">
                    <h3 className="text-center text-crimson-500 text-2xl mt-8 font-bold">Add Your Own Tour Package </h3>
                    <div>
                        <div className="p-8">
                            <form onSubmit={handleSubmit(onSubmitFunction)}>
                                <input
                                    {...register("name", {
                                        required: 'Name is Required',
                                        minLength: {
                                            value: 4,
                                            message: 'min name length required 4'
                                        },
                                    })}
                                    className={`border-2 ${errors.name && "border-red-400"}  rounded block w-full px-4 py-3   outline-none`}
                                    type="text" placeholder="place Name"
                                />
                                {
                                    errors.name && (<small className="text-red-500">{errors.name.message} </small>)
                                }
                                <input
                                    {...register("country", {
                                        required: 'country is Required',
                                    })}
                                    className={`border-2 ${errors.country && "border-red-400"} rounded block  w-full px-4 py-3 mt-3 outline-none`} type="text" placeholder="country" />
                                {
                                    errors.country && (<small className="text-red-500">{errors.country.message} </small>)
                                }
                                <input
                                    {...register("description", {
                                        required: 'description is Required',
                                    })}
                                    className={`border-2 ${errors.description && "border-red-400"} rounded block  w-full px-4 py-3 mt-3 outline-none`} type="text" placeholder="description" />
                                {
                                    errors.description && (<small className="text-red-500">{errors.description.message} </small>)
                                }

                                <input
                                    {...register("image", {
                                        required: 'image url is Required',
                                    })}
                                    className={`border-2 ${errors.image && "border-red-400"} rounded block w-full px-4 py-3 mt-3 outline-none`} type="url" placeholder="img url" />
                                {
                                    errors.image && (<small className="text-red-500">{errors.image.message} </small>)
                                }

                                <input
                                    {...register("price", {
                                        required: 'price is Required'
                                    })}
                                    className={`border-2  ${errors.price && "border-red-400"}  rounded block w-full px-4 py-3 mt-3 outline-none`} type="price" placeholder="Your price" />
                                {
                                    errors.price && (<small className="text-red-500">{errors.price.message} </small>)
                                }

                                <input
                                    {...register("rating", {
                                        required: 'rating is Required'
                                    })}
                                    className={`border-2  ${errors.rating && "border-red-400"}  rounded block w-full px-4 py-3 mt-3 outline-none`} type="rating" placeholder="Your rating" />
                                {
                                    errors.rating && (<small className="text-red-500">{errors.rating.message} </small>)
                                }

                                <input
                                    {...register("duration", {
                                        required: 'duration is Required'
                                    })}
                                    className={`border-2  ${errors.duration && "border-red-400"}  rounded block w-full px-4 py-3 mt-3 outline-none`} type="duration" placeholder="Your duration" />
                                {
                                    errors.duration && (<small className="text-red-500">{errors.duration.message} </small>)
                                }

                                <input
                                    {...register("review", {
                                        required: 'review is Required'
                                    })}
                                    className={`border-2  ${errors.review && "border-red-400"}  rounded block w-full px-4 py-3 mt-3 outline-none`} type="review" placeholder="Your review" />
                                {
                                    errors.review && (<small className="block text-red-500">{errors.review.message} </small>)
                                }

                                <button type="submit" className="mt-4 px-8 mr-2 py-2 rounded-3xl bg-red-500 hover:bg-red-500  text-white shadow-lg">Add Now </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddATour
