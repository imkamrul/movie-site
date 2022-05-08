import React from "react";
import DashboardNav from "../components/Section/DashboardNav";
import Link from "next/link";
import { useForm } from "react-hook-form";
const VideosAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section className="flex">
      <DashboardNav />
      <div className="w-10/12 pt-[10px]">
        <div className="text-right">
          <Link href="/movie-collection">
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
                    <option value="female">Bollywood</option>
                    <option value="male">Hollywood</option>
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
                    type="file"
                    accept=".jpg, .jpeg, .png"
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
                <p className="py-2 w-3/12">Stars</p>
                <div className="w-7/12">
                  <input
                    type="text"
                    className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
                    {...register("stars", { required: true })}
                  />
                  {errors.stars && (
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
                    className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
                    {...register("genre", { required: true })}
                  />
                  {errors.genre && (
                    <p className="text-[red] text-xs py-2">
                      This field is required
                    </p>
                  )}
                </div>
              </div>
              <div className="flex py-2">
                <p className="py-2 w-3/12">Run Time</p>
                <div className="w-7/12">
                  <input
                    type="text"
                    className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
                    {...register("time", { required: true })}
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
                    {...register("date", { required: true, max: 10, min: 0 })}
                  />
                  {errors.date && (
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

export default VideosAdd;
