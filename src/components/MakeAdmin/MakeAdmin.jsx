import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import sweetAlert from "sweetalert";
import useFirebaseMongo from '../../Hooks/useFirebaseMongo';

const MakeAdmin = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { firebase: { firebaseData } } = useFirebaseMongo();

  const onSubmitFunction = (userData) => {
    const { email } = userData;
    axios.put(`http://localhost:5000/make_admin/${firebaseData.email}`, { email }, {
      headers: { 'authorization': `Bearer ${localStorage.getItem("idToken")}` }
    })
      .then(res => {
        sweetAlert("Hurray!", "Admin Created Successfully", "success");
        reset();
      });
  }

  return (
    <div className="p-4 md:p-12">
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl'>Make Admin </h1>
      <div className="p-8">
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <input
            {...register("email", {
              required: 'Email is Required',
            })}
            className={`border-2 ${errors.email && "border-red-400"}  rounded block w-full px-4 py-3   outline-none`}
            type="text" placeholder="Enter Email"
          />
          {
            errors.email && (<small className="text-red-500">{errors.email.message} </small>)
          }
          <button type="submit" className="mt-4 px-8 mr-2 py-2 rounded-3xl bg-red-500 hover:bg-red-600  text-white shadow-lg"> Make Admin </button>

        </form>
      </div>
    </div>
  )
}

export default MakeAdmin