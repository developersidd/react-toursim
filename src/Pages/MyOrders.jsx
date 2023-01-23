import axios from 'axios';
import React, { useEffect, useState } from 'react';
import sweetalert from "sweetalert";
import useFirebaseMongo from '../Hooks/useFirebaseMongo';

const MyOrders = () => {
    const [isFetching, setIsFetching] = useState(true);
    const { firebase: { firebaseData } } = useFirebaseMongo();
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        setIsFetching(true);
        fetch(`http://localhost:5000/users/${firebaseData.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("idToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setMyOrders(data);
            }).finally(() => {
                setIsFetching(false);
            });
    }, [firebaseData.email]);


    const handleDelete = (id, email) => {
        const confirmation = window.confirm("are you really wanna delete?");
        if (confirmation) {
            axios.delete(`http://localhost:5000/${id}/${email}`, { headers: { 'authorization': `Bearer ${localStorage.getItem("idToken")}` } })
                .then(res => {
                    sweetalert("Congras!", "Tour Deleted successfully", "success");
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                });
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
                    myOrders.length <= 0 ? <div className="flex items-center justify-center text-4xl font-bold">
                        <h2>You didn't added any product yet! </h2>  </div>
                        :
                        myOrders?.map(item => {
                            return (
                                <div key={item._id} className="flex items-center justify-between shadow-md rounded-md px-8 py-5 mb-10">
                                    <img className="w-36 h-20 rounded-md" src={item.image} alt="" />
                                    <h3><span className='font-semibold'>Tour Name:</span>  {item.name} </h3>
                                    <h3><span className='font-semibold'>Name:</span>  {item.displayName} </h3>
                                    <h3><span className='font-semibold'>Phone:</span>  {item.phone} </h3>
                                    <h3><span className='font-semibold'>Price:</span>  ${item.price} </h3>
                                    <button onClick={() => handleDelete(item._id, firebaseData.email)} className="px-6 py-2 bg-red-600 text-white rounded-md">Delete </button>
                                </div>
                            );
                        })
                }
            </div>
        </div>
    );
}

export default MyOrders
