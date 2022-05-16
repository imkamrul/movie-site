import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardNav from "../../../components/Section/DashboardNav";
import { BASE_URL } from "../../../util/Url";
import axios from "axios";
const Add = () => {
  const error = (text) => toast.error(text);
  const success = (text) => toast.success(text);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}/videos`, data);
      console.log(res);
      if (res.status === 200) {
        setLoading(false);
        success("Success, New video added");
      }
    } catch (err) {
      setLoading(false);
      error("Error, Can't add new video");
    }
  };
  return (
    <section className="flex">
      <DashboardNav />
      <div className="w-10/12 pt-[20px] ">
        <div className="text-right">
          <ToastContainer />
          <Link href="/Dashboard/Videos">
            <a className="bg-themeText text-white text-lg px-3 py-2 rounded mx-5">
              {" "}
              Back
            </a>
          </Link>
        </div>
        <div className="  flex justify-center">
          <div className="  text-white w-8/12  rounded px-4 py-10">
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
                <p className="py-2 w-3/12">Movie Name</p>
                <div className="w-7/12">
                  <input
                    type="text"
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
                <p className="py-2 w-3/12">Short Info</p>
                <div className="w-7/12">
                  <textarea
                    type="text"
                    className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
                    {...register("info", { required: true })}
                  />
                  {errors.info && (
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
                  </select>

                  {errors.type && (
                    <p className="text-[red] text-xs py-2">
                      This field is required
                    </p>
                  )}
                </div>
              </div>
              <div className="flex py-2">
                <p className="py-2 w-3/12">Download Link</p>
                <div className="w-7/12">
                  <input
                    type="text"
                    className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
                    {...register("download", { required: true })}
                  />
                  {errors.download && (
                    <p className="text-[red] text-xs py-2">
                      This field is required
                    </p>
                  )}
                </div>
              </div>
              <div className="flex py-2">
                <p className="py-2 w-3/12">Writer</p>
                <div className="w-7/12">
                  <input
                    type="text"
                    className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
                    {...register("writer", { required: true })}
                  />
                  {errors.writer && (
                    <p className="text-[red] text-xs py-2">
                      This field is required
                    </p>
                  )}
                </div>
              </div>
              <div className="flex py-2">
                <p className="py-2 w-3/12">Images</p>
                <div className="w-7/12">
                  <input
                    type="text"
                    className=" bg-white py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
                    {...register("image", { required: true })}
                  />
                  {errors.image && (
                    <p className="text-[red] text-xs py-2">
                      This field is required
                    </p>
                  )}
                </div>
              </div>
              <div className="flex py-2">
                <p className="py-2 w-3/12">Director</p>
                <div className="w-7/12">
                  <input
                    type="text"
                    className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
                    {...register("director", { required: true })}
                  />
                  {errors.director && (
                    <p className="text-[red] text-xs py-2">
                      This field is required
                    </p>
                  )}
                </div>
              </div>
              <div className="flex py-2">
                <p className="py-2 w-3/12">Cast</p>
                <div className="w-7/12">
                  <input
                    type="text"
                    className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
                    {...register("cast", { required: true })}
                  />
                  {errors.cast && (
                    <p className="text-[red] text-xs py-2">
                      This field is required
                    </p>
                  )}
                </div>
              </div>

              <div className="flex py-2">
                <p className="py-2 w-3/12">Movie Type</p>

                <div className="w-7/12">
                  <label className="inline-flex items-center pr-6">
                    <input
                      type="checkbox"
                      value="Action"
                      {...register("genre", { required: true })}
                    />
                    <span className="pl-2">Action</span>
                  </label>

                  <label className="inline-flex items-center pr-6">
                    <input
                      type="checkbox"
                      value="Romantic"
                      {...register("genre", { required: true })}
                    />
                    <span className="pl-2">Romantic</span>
                  </label>

                  <label className="inline-flex items-center pr-3">
                    <input
                      type="checkbox"
                      value="Adventure"
                      {...register("genre", { required: true })}
                    />
                    <span className="ml-2">Adventure</span>
                  </label>

                  <label className="inline-flex items-center pr-3">
                    <input
                      type="checkbox"
                      value="Thriller"
                      {...register("genre", { required: true })}
                    />
                    <span className="ml-2">Thriller</span>
                  </label>

                  <label className="inline-flex items-center pr-3">
                    <input
                      type="checkbox"
                      value="Sci-fi"
                      {...register("genre", { required: true })}
                    />
                    <span className="ml-2">Sci-fi</span>
                  </label>

                  <label className="inline-flex items-center pr-3">
                    <input
                      type="checkbox"
                      value="Comedy"
                      {...register("genre", { required: true })}
                    />
                    <span className="ml-2">Comedy</span>
                  </label>

                  {errors.genre && (
                    <p className="text-[red] text-xs py-2">
                      This field is required
                    </p>
                  )}
                </div>
              </div>
              <div className="flex py-2">
                <p className="py-2 w-3/12">Duration</p>
                <div className="w-7/12">
                  <input
                    type="text"
                    className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
                    {...register("duration", { required: true })}
                  />
                  {errors.time && (
                    <p className="text-[red] text-xs py-2">
                      This field is required
                    </p>
                  )}
                </div>
              </div>
              <div className="flex py-2">
                <p className="py-2 w-3/12">Release Date</p>
                <div className="w-7/12">
                  <input
                    type="date"
                    className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
                    {...register("date", { required: true })}
                  />
                  {errors.date && (
                    <p className="text-[red] text-xs py-2">
                      This field is required
                    </p>
                  )}
                </div>
              </div>
              <div className="flex py-2">
                <p className="py-2 w-3/12">Rating</p>
                <div className="w-7/12">
                  <input
                    type="number"
                    className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
                    {...register("rating", { required: true, max: 10, min: 0 })}
                  />
                  {errors.rating && (
                    <p className="text-[red] text-xs py-2">
                      This field is required
                    </p>
                  )}
                </div>
              </div>
              <div className="flex py-2">
                <p className="py-2 w-3/12">Language</p>
                <div className="w-7/12">
                  <input
                    type="text"
                    className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
                    {...register("language", { required: true })}
                  />
                  {errors.language && (
                    <p className="text-[red] text-xs py-2">
                      This field is required
                    </p>
                  )}
                </div>
              </div>
              <div className="flex py-2">
                <p className="py-2 w-3/12">Trailer</p>
                <div className="w-7/12">
                  <input
                    type="text"
                    className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
                    {...register("trailer", {
                      required: true,
                    })}
                  />
                  {errors.trailer && (
                    <p className="text-[red] text-xs py-2">
                      This field is required
                    </p>
                  )}
                </div>
              </div>
              <div className="flex py-2">
                <p className="py-2 w-3/12">Subtitle</p>
                <div className="w-7/12">
                  <input
                    type="text"
                    className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
                    {...register("subtitle", {
                      required: true,
                    })}
                  />
                  {errors.subtitle && (
                    <p className="text-[red] text-xs py-2">
                      This field is required
                    </p>
                  )}
                </div>
              </div>
              <div className="flex py-2">
                <p className="py-2 w-3/12">Quality</p>
                <div className="w-7/12">
                  <input
                    type="text"
                    className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
                    {...register("quality", {
                      required: true,
                    })}
                  />
                  {errors.quality && (
                    <p className="text-[red] text-xs py-2">
                      This field is required
                    </p>
                  )}
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
  );
};

export default Add;
