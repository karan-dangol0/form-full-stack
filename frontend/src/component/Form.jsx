import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    // setFormData(...formData, [e.target.name]:e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      // const res = await axios.post("http://localhost:3000/api/users", formData);
      const res = await axios.post("https://form-full-stack.vercel.app/api/users", formData);
      console.log(res.data);
        setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    })
      
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl text-center mb-10">Form</h1>
        <div className="flex flex-col justify-center items-center">
          <form className="shadow-xl w-[400px] shadow-gray-200" onSubmit={submitForm}>
            <div className="flex flex-col mx-5 mb-3">
              <label htmlFor="">First Name</label>
              <input
                className=" w-[80%] py-2 px-4 mt-2  border rounded border-gray-400"
                placeholder="First name"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                id=""
              />
            </div>
            <div className="flex flex-col mx-5 mb-3">
              <label htmlFor="">Last Name</label>
              <input
                className=" w-[80%] py-2 px-4 mt-2  border rounded border-gray-400"
                placeholder="Last name"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                id=""
              />
            </div>

            <div className="flex flex-col mx-5 mb-3">
              <label htmlFor="">Email</label>
              <input
                className=" w-[80%] py-2 px-4 mt-2  border rounded border-gray-400"
                placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                id=""
              />
            </div>
            <div className="flex flex-col mx-5 mb-3">
              <label htmlFor="">Phone Number</label>
              <input
                className=" appearance-none w-[80%] py-2 px-4 mt-2  border rounded border-gray-400   [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                placeholder="Phone Number"
                type="Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                id=""
              />
            </div>

            <input
              type="submit"
              value="Submit"
              className="w-[80%] ml-auto bg-blue-400 text-white py-3 "
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
