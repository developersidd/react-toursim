import axios from 'axios';
import { useEffect, useState } from 'react';
import sweetalert from "sweetalert";
import useFirebaseMongo from '../Hooks/useFirebaseMongo';

const ManageAllOrders = () => {

    const [allOrders, setAllOrders] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const { firebase: { firebaseData } } = useFirebaseMongo();

    useEffect(() => {
        setIsFetching(true);
        axios.get(`http://localhost:5000/ordered_tour/${firebaseData.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("idToken")}`
            }
        })
            .then(res => {
                setAllOrders(res.data);
            }).finally(() => {
                setIsFetching(false);
            });
    }, [firebaseData.email]);


    const handleDelete = (id) => {
        const confirmation = window.confirm("are you really wanna delete?");
        if (confirmation) {
            axios.delete(`http://localhost:5000/${id}/${firebaseData.email}`, {
                headers: { 'authorization': `Bearer ${localStorage.getItem("idToken")}` }
            })
                .then(res => {
                    sweetalert("Congras!", "Tour Deleted successfully", "success");
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                })
        } else {
            sweetalert("Good Job", "For your Response", "info");
        }
    }

    if (isFetching) {
        return (
            <div className="h-screen flex items-center justify-center">
                <img src="https://assets.materialup.com/uploads/fa8430a1-4dea-49d9-a4a3-e5c6bf0b2afb/preview.gif" alt="spinner-img" />
            </div>
        )
    }

    return (
        <div className="container mx-auto p-12">
            <div>
                {
                    !allOrders.length >= 1 ? <div className="flex items-center justify-center text-4xl font-bold">
                        <h2>You didn't added any product yet! </h2>  </div>
                        :
                        allOrders?.map(item => {
                            return (
                                <div key={item._id} className="flex items-center justify-between shadow-md rounded-md px-8 py-5 mb-10">
                                    <img className="w-36 h-20 rounded-md" src={item?.image} alt="" />
                                    <h3><span className='font-semibold'>Tour Name:</span>  {item.name} </h3>
                                    <h3><span className='font-semibold'>Name:</span>  {item.displayName} </h3>
                                    <h3><span className='font-semibold'>Phone:</span>  {item.phone} </h3>
                                    <h3><span className='font-semibold'>Price:</span>  ${item.price} </h3>
                                    <button onClick={() => handleDelete(item?._id)} className="px-6 py-2 bg-red-600 text-white rounded-md">Delete </button>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default ManageAllOrders
