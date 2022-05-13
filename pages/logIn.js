import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FacebookIcon, GoogleIcon } from "../components/common/SVGIcons";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const error = (text) => toast.error(text);
  const success = (text) => toast.success(text);
  const onSubmit = (data) => {
    console.log(signUp);
    if (signUp) {
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
    // <section className="h-[100vh] w-[100wh] bg-[url('../public/b-img.jpg')] "></section>
    <section>
      <div className="h-[100vh] w-[100wh] login-bg"></div>
      <div className=" relative z-[9999] flex justify-center items-center h-[100vh]">
        <div className="bg-white w-4/12 rounded-2xl p-5">
          <h4 className="text-center text-3xl pt-4 pb-1">
            {signUp ? "Sign Up" : "Sign In"} With
          </h4>
          <div className="text-center py-5 flex justify-between w-8/12 mx-auto">
            <button className="bg-[#3f9fff] text-white px-3 py-2 rounded mx-3 shadow-lg flex items-center">
              <FacebookIcon />
              <span className="pl-3 text-xl"> Facebook</span>
            </button>
            <button className="px-6 py-3 rounded mx-3 shadow-lg flex items-center">
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
// {/* <section className="text-white container mx-auto h-[100vh] w-[100wh] flex justify-center items-center">
// <div className="w-8/12       py-10">
//   {/* shadow-sm shadow-themeText */}

//   <h2 className="text-3xl text-center">Welcome To Movie Scope</h2>
//   <h4 className="text-center py-4 text-xl">Log in</h4>

//   <div className="  flex justify-center">
//     <div className="  text-white w-8/12  rounded px-4 py-10">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         {signUp && (
//           <div className="flex py-2">
//             <p className="py-2 w-3/12">Name</p>
//             <div className="w-7/12">
//               <input
//                 type="name"
//                 className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
//                 {...register("name", { required: true })}
//               />
//               {errors.name && (
//                 <p className="text-[red] text-xs pb-2 pt-1">
//                   This field is required
//                 </p>
//               )}
//             </div>
//           </div>
//         )}
//         <div className="flex py-2">
//           <p className="py-2 w-3/12">Email</p>
//           <div className="w-7/12">
//             <input
//               type="email"
//               className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
//               {...register("email", { required: true })}
//             />
//             {errors.email && (
//               <p className="text-[red] text-xs pb-2 pt-1">
//                 This field is required
//               </p>
//             )}
//           </div>
//         </div>
//         <div className="flex py-2">
//           <p className="py-2 w-3/12">Password</p>
//           <div className="w-7/12">
//             <input
//               type="password"
//               className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
//               {...register("password", { required: true })}
//             />
//             {errors.password && (
//               <p className="text-[red] text-xs pb-2 pt-1">
//                 This field is required
//               </p>
//             )}
//           </div>
//         </div>
//         {signUp && (
//           <div className="flex py-2">
//             <p className="py-2 w-3/12">Confirm Password</p>
//             <div className="w-7/12">
//               <input
//                 type="password"
//                 className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
//                 {...register("cpassword", { required: true })}
//               />
//               {errors.cpassword && (
//                 <p className="text-[red] text-xs pb-2 pt-1">
//                   This field is required
//                 </p>
//               )}
//             </div>
//           </div>
//         )}
//         <ToastContainer />
//         <div className="text-center">
//           <input
//             type="submit"
//             value={` ${signUp ? "Sign up" : "Sign in"}`}
//             className="cursor-pointer bg-themeText text-lg text-white my-2 py-1 rounded mx-3 px-5"
//           />
//         </div>
//       </form>
//     </div>
//   </div>
//   <p className="text-center text-xl">Or</p>
//   <div className="flex justify-center flex-col gap-y-4 items-center">
//     <button className="w-5/12 flex justify-center items-center px-10 py-2 border-b-4 border-[#FE4A25]">
//       <Image
//         src="/google.png"
//         width={40}
//         height={40}
//         layout="fixed"
//         alt="logo"
//       />
//       <span className="pl-3 text-xl"> Continue With Google</span>
//     </button>
//     <button className="w-5/12 flex justify-center items-center px-10 py-2 border-b-4 border-[#157AE9]">
//       <Image
//         src="/facebook.png"
//         width={40}
//         height={40}
//         layout="fixed"
//         alt="logo"
//       />
//       <span className="pl-3 text-xl"> Continue With Facebook</span>
//     </button>
//   </div>
//   <p
//     className="py-5 text-center group cursor-pointer mt-12"
//     onClick={() => handleSignUpOption(!signUp)}
//   >
//     {signUp
//       ? "Do you have already an account ?"
//       : "Didn't have an account ?"}
//     <span className="group-hover:text-themeText">
//       {signUp ? " Login Now" : " Registration Now"}
//     </span>
//   </p>
// </div>
// </section> */}
