import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const error = (text) => toast.error(text);
  const success = (text) => toast.success(text);
  const onSubmit = (data) => {
    if (data.cpassword) {
      if (data.password !== data.cpassword) {
        error("password does not match");
      } else {
        success("Successfully Sign up");
      }
    } else {
      success("Successfully Sign in");
    }
  };
  const [signUp, setSignUp] = useState(false);

  const handleSignUpOption = (data) => {
    console.log(data);
    setSignUp(data);
  };

  return (
    <section className="text-white container mx-auto h-[100vh] w-[100wh] flex justify-center items-center">
      <div className="w-8/12       py-10">
        {/* shadow-sm shadow-themeText */}

        <h2 className="text-3xl text-center">Welcome To Movie Scope</h2>
        <h4 className="text-center py-4 text-xl">Log in</h4>

        <div className="  flex justify-center">
          <div className="  text-white w-8/12  rounded px-4 py-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              {signUp && (
                <div className="flex py-2">
                  <p className="py-2 w-3/12">Name</p>
                  <div className="w-7/12">
                    <input
                      type="name"
                      className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <p className="text-[red] text-xs pb-2 pt-1">
                        This field is required
                      </p>
                    )}
                  </div>
                </div>
              )}
              <div className="flex py-2">
                <p className="py-2 w-3/12">Email</p>
                <div className="w-7/12">
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
              </div>
              <div className="flex py-2">
                <p className="py-2 w-3/12">Password</p>
                <div className="w-7/12">
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
              </div>
              {signUp && (
                <div className="flex py-2">
                  <p className="py-2 w-3/12">Confirm Password</p>
                  <div className="w-7/12">
                    <input
                      type="password"
                      className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
                      {...register("cpassword", { required: true })}
                    />
                    {errors.cpassword && (
                      <p className="text-[red] text-xs pb-2 pt-1">
                        This field is required
                      </p>
                    )}
                  </div>
                </div>
              )}
              <ToastContainer />
              <div className="text-center">
                <input
                  type="submit"
                  value={` ${signUp ? "Sign up" : "Sign in"}`}
                  className="cursor-pointer bg-themeText text-lg text-white my-2 py-1 rounded mx-3 px-5"
                />
              </div>
            </form>
          </div>
        </div>
        <p className="text-center text-xl">Or</p>
        <div className="flex justify-center flex-col gap-y-4 items-center">
          <button className="w-5/12 flex justify-center items-center px-10 py-2 border-b-4 border-[#FE4A25]">
            <Image
              src="/google.png"
              width={50}
              height={50}
              layout="fixed"
              alt="logo"
            />
            <span className="pl-3 text-xl"> Continue With Google</span>
          </button>
          <button className="w-5/12 flex justify-center items-center px-10 py-2 border-b-4 border-[#157AE9]">
            <Image
              src="/facebook.png"
              width={50}
              height={50}
              layout="fixed"
              alt="logo"
            />
            <span className="pl-3 text-xl"> Continue With Facebook</span>
          </button>
        </div>
        <p
          className="py-5 text-center group cursor-pointer"
          onClick={() => handleSignUpOption(!signUp)}
        >
          {signUp
            ? "Do you have already an account ?"
            : "Didn't have an account ?"}
          <span className="group-hover:text-themeText">
            {signUp ? " Login Now" : " Registration Now"}
          </span>
        </p>
      </div>
    </section>
  );
};

export default Login;
