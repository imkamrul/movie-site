import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Head from "next/head";
import { BASE_URL } from "../util/Url";
const Request = () => {
  const router = useRouter();
  const error = (text) => toast.error(text);
  const success = (text) => toast.success(text);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    data.request_date = new Date().toLocaleDateString();
    data.status = "Pending";
    try {
      const res = await axios.post(`${BASE_URL}/request`, data);
      if (res.status === 200) {
        reset();
        setLoading(false);
        success("Success, your request has been sent");
        setTimeout(() => {
          router.push("/");
        }, 5000);
      }
    } catch (err) {
      setLoading(false);
      error("Error, Can't sent your request");
    }
  };
  return (
    <>
      <Head>
        <title>Request</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="flex">
        <div className="w-10/12 pt-[20px] mx-auto">
          <div className="  flex justify-center">
            <ToastContainer />
            <div className="  text-white w-8/12  rounded px-4 py-10 mt-10">
              <p className="text-lg py-2">Fill the Form</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex py-2">
                  <p className="py-2 w-3/12">Catagories</p>
                  <div className="w-7/12">
                    <label className="cursor-pointer">
                      <input
                        {...register("catagory", { required: true })}
                        type="radio"
                        value="movies"
                        className=" mr-2 "
                      />
                      Movies
                    </label>
                    <label className="cursor-pointer">
                      <input
                        {...register("catagory", { required: true })}
                        type="radio"
                        value="series"
                        className=" ml-5 mr-2"
                      />
                      Series
                    </label>
                    {errors.catagory && (
                      <p className="text-[red] text-xs py-2">
                        This field is required
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex py-2">
                  <p className="py-2 w-3/12">Name</p>
                  <div className="w-7/12">
                    <input
                      type="text"
                      placeholder="Name"
                      className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <p className="text-[red] text-xs py-2">
                        This field is required
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex py-2">
                  <p className="py-2 w-3/12">Type</p>
                  <div className="w-7/12">
                    <select
                      {...register("type")}
                      className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
                    >
                      <option value="Bollywood">Bollywood</option>
                      <option value="Hollywood">Hollywood</option>
                      <option value="Tollywood">Tollywood</option>
                      <option value="Other">Other</option>
                    </select>

                    {errors.type && (
                      <p className="text-[red] text-xs py-2">
                        This field is required
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex py-2">
                  <p className="py-2 w-3/12">Genre</p>
                  <div className="w-7/12">
                    <input
                      type="text"
                      placeholder="Action, Comedy, Romantic ..."
                      className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
                      {...register("genre")}
                    />
                  </div>
                </div>

                <div className="flex py-2">
                  <p className="py-2 w-3/12">Release Year</p>
                  <div className="w-7/12">
                    <input
                      type="text"
                      placeholder="dd-month-year"
                      className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
                      {...register("date")}
                    />
                  </div>
                </div>

                <div className="text-center">
                  <input
                    type="submit"
                    className="cursor-pointer bg-themeText text-lg text-white font-semibold my-2 py-1 rounded mx-3 px-5"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Request;
