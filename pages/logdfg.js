import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useUser from "../hooks/useUser";
import { useRouter } from "next/router";
const Login = () => {
  const router = useRouter();
  const { login } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const error = (text) => toast.error(text);
  const success = (text) => toast.success(text);

  const onSubmit = (data) => {
    const status = login(data.email, data.password);
    if (status) {
      success("Log in succesfully");
      router.push("/");
    } else {
      error("Log in failed");
    }
  };
  return (
    <section>
      <div className="h-[100vh] w-[100wh] login-bg"></div>
      <div className=" relative z-[9999] flex justify-center items-center h-[100vh]">
        <div className="bg-white w-4/12 rounded-2xl p-5">
          <h4 className="text-center text-3xl pt-4 pb-1">Sign In</h4>

          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-center items-center px-4"
            >
              <div className="py-2  w-8/12">
                <p className="py-2">Email</p>

                <input
                  type="email"
                  className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-[red] text-xs pb-2 pt-1">
                    This field is required
                  </p>
                )}
              </div>
              <div className="w-8/12">
                <p className="py-2">Password</p>

                <input
                  type="password"
                  className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="text-[red] text-xs pb-2 pt-1">
                    This field is required
                  </p>
                )}
              </div>
              <ToastContainer />
              <div className="text-center">
                <input
                  type="submit"
                  value="Sign in"
                  className="cursor-pointer bg-themeBG  text-white my-2 py-2 rounded mx-6 px-7 text-3xl mt-8"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
