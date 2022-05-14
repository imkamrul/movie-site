import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FacebookIcon, GoogleIcon } from "../components/common/SVGIcons";
import { providers, getSession, csrfToken, signIn } from "next-auth/client";
import Router from "next/router";
const Login = ({ providers, session, csrfToken }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const error = (text) => toast.error(text);
  const success = (text) => toast.success(text);

  const [signUp, setSignUp] = useState(false);

  const handleSignUpOption = (data) => {
    console.log(data);
    setSignUp(data);
  };
  useEffect(() => {
    if (session) return Router.push("/");
  }, [session]);

  useEffect(() => {
    if (Router.query.error) {
      toast.error(Router.query.error);
      return Router.push("/login");
    }
  }, []);
  const UserLogin = async (method, options) => {
    if (method === "credentials") {
      const res = await signIn(method, options);
      console.log(res);
      if (res.error) {
        if (res.error === "Success! Check your email.") {
          signIn("email", { email: options.email });
          return toast.success(res.error);
        }
        return toast.error(res.error);
      }
      return Router.push("/logIn");
    } else {
      const res = await signIn(method);
    }
  };
  const onSubmit = (data) => {
    if (signUp) {
      if (data.password !== data.cpassword) {
        error("password does not match");
      } else {
        handleSubmit("credentials", {
          redirect: false,
          email: data.email,
          password: data.password,
        });
      }
    } else {
      UserLogin("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });
    }
  };
  if (session) return null;

  return (
    <section>
      <div className="h-[100vh] w-[100wh] login-bg"></div>
      <div className=" relative z-[9999] flex justify-center items-center h-[100vh]">
        <div className="bg-white w-4/12 rounded-2xl p-5">
          <h4 className="text-center text-3xl pt-4 pb-1">
            {signUp ? "Sign Up" : "Sign In"} With
          </h4>
          <div className="text-center py-5 flex justify-between w-8/12 mx-auto">
            <button
              className="bg-[#3f9fff] text-white px-3 py-2 rounded mx-3 shadow-lg flex items-center"
              onClick={() => UserLogin("facebook", "options")}
            >
              <FacebookIcon />
              <span className="pl-3 text-xl"> Facebook</span>
            </button>
            <button
              className="px-6 py-3 rounded mx-3 shadow-lg flex items-center"
              onClick={() => UserLogin("google", "options")}
            >
              <GoogleIcon /> <span className="pl-3 text-xl"> Google</span>
            </button>
          </div>
          <div>
            <h4 className="text-center text-xl pt-2">Or</h4>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-center items-center px-4"
            >
              {signUp && (
                <div className="w-8/12">
                  <p className="py-2">Name</p>

                  <input
                    type="text"
                    className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <p className="text-[red] text-xs pb-2 pt-1">
                      This field is required
                    </p>
                  )}
                </div>
              )}
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
              {signUp && (
                <div className="w-8/12">
                  <p className="py-2">Confirm Password</p>

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
              )}
              <ToastContainer />
              <div className="text-center">
                <input
                  type="submit"
                  value={` ${signUp ? "Sign up" : "Sign in"}`}
                  className="cursor-pointer bg-themeBG  text-white my-2 py-2 rounded mx-6 px-7 text-3xl mt-8"
                />
              </div>
            </form>
            <p
              className="py-3 pt-5 text-center group cursor-pointer"
              onClick={() => handleSignUpOption(!signUp)}
            >
              {signUp
                ? "Do you have already an account ?"
                : "Didn't have an account ?"}
              <span className="group-hover:text-themeText underline">
                {signUp ? " Login Now" : " Registration Now"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
