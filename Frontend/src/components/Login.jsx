import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="h-screen flex items-center justify-center">
      <div
        id="login_modal"
        className="bg-white h-1/2 border-2 border-pink-500 rounded-lg shadow-lg max-w-md w-full p-6"
        open
        // Prevent click events from closing the modal
      >
        <div>
          <h2 className="text-2xl font-bold mb-4">Login Form</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center justify-center flex-col"
          >
            <div className="w-full">
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Email"
                className="border-2 border-orange-500 w-11/12 px-2 py-2 my-4 rounded-md cursor-pointer outline-none"
              />
<br />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="w-full">
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="password"
                className="border-2 border-orange-500 w-11/12 px-2 py-2 my-4 rounded-md cursor-pointer outline-none"
              />
<br />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="w-full flex justify-between items-center">
            <input
              type="submit"
              value="Login"
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md cursor-pointer"
            />

            <div className="mt-12">
              <p>Create Account <span><Link to="/signup" className="underline text-blue-500" >Sign Up</Link></span></p>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
