import DashboardNav from "../../../components/Section/DashboardNav";
import { BASE_URL } from "../../../util/Url";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
const MovieEdit = ({ data }) => {
  console.log(data);
  const error = (text) => toast.error(text);
  const success = (text) => toast.success(text);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (value) => {
    console.log(value);
    setLoading(true);
    try {
      const res = await axios.put(`${BASE_URL}/videos/${data._id}`, value);
      console.log(res);
      if (res.data.matchedCount == 1) {
        setLoading(false);
        success("Success, Video Data Update");
        // setTimeout(() => {
        //   router.push("/Dashboard/Videos");
        // }, 5000);
      }
    } catch (err) {
      setLoading(false);
      error("Error, Can't update Video");
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
                  {data.catagory === "movies" ? (
                    <label className="cursor-pointer">
                      <input
                        {...register("catagory", { required: true })}
                        type="radio"
                        value="movies"
                        className=" ml-5 mr-2"
                        defaultChecked
                      />
                      Movies
                    </label>
                  ) : (
                    <label className="cursor-pointer">
                      <input
                        {...register("catagory", { required: true })}
                        type="radio"
                        value="movies"
                        className=" ml-5 mr-2"
                      />
                      Movies
                    </label>
                  )}
                  {data.catagory === "series" ? (
                    <label className="cursor-pointer">
                      <input
                        {...register("catagory", { required: true })}
                        type="radio"
                        value="series"
                        className=" ml-5 mr-2"
                        defaultChecked
                      />
                      Series
                    </label>
                  ) : (
                    <label className="cursor-pointer">
                      <input
                        {...register("catagory", { required: true })}
                        type="radio"
                        value="series"
                        className=" ml-5 mr-2"
                      />
                      Series
                    </label>
                  )}
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
                    defaultValue={data.name}
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
                    defaultValue={data.info}
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
                    defaultValue={data.type}
                    {...register("type")}
                    className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
                  >
                    <option value="Bollywood">Bollywood</option>
                    <option value="Holywood">Hollywood</option>
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
                    defaultValue={data.download}
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
                    defaultValue={data.writer}
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
                    defaultValue={data.image}
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
                    defaultValue={data.director}
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
                    defaultValue={data.cast}
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
                  {data.genre.includes("Action") ? (
                    <label className="inline-flex items-center pr-6">
                      <input
                        type="checkbox"
                        value="Action"
                        defaultChecked
                        {...register("genre", { required: true })}
                      />
                      <span className="pl-2">Action</span>
                    </label>
                  ) : (
                    <label className="inline-flex items-center pr-6">
                      <input
                        type="checkbox"
                        value="Action"
                        {...register("genre", { required: true })}
                      />
                      <span className="pl-2">Action</span>
                    </label>
                  )}
                  {data.genre.includes("Romantic") ? (
                    <label className="inline-flex items-center pr-6">
                      <input
                        type="checkbox"
                        value="Romantic"
                        defaultChecked
                        {...register("genre", { required: true })}
                      />
                      <span className="pl-2">Romantic</span>
                    </label>
                  ) : (
                    <label className="inline-flex items-center pr-6">
                      <input
                        type="checkbox"
                        value="Romantic"
                        {...register("genre", { required: true })}
                      />
                      <span className="pl-2">Romantic</span>
                    </label>
                  )}

                  {data.genre.includes("Adventure") ? (
                    <label className="inline-flex items-center pr-3">
                      <input
                        type="checkbox"
                        value="Adventure"
                        defaultChecked
                        {...register("genre", { required: true })}
                      />
                      <span className="ml-2">Adventure</span>
                    </label>
                  ) : (
                    <label className="inline-flex items-center pr-3">
                      <input
                        type="checkbox"
                        value="Adventure"
                        {...register("genre", { required: true })}
                      />
                      <span className="ml-2">Adventure</span>
                    </label>
                  )}
                  {data.genre.includes("Adventure") ? (
                    <label className="inline-flex items-center pr-3">
                      <input
                        type="checkbox"
                        value="Thriller"
                        defaultChecked
                        {...register("genre", { required: true })}
                      />
                      <span className="ml-2">Thriller</span>
                    </label>
                  ) : (
                    <label className="inline-flex items-center pr-3">
                      <input
                        type="checkbox"
                        value="Thriller"
                        {...register("genre", { required: true })}
                      />
                      <span className="ml-2">Thriller</span>
                    </label>
                  )}
                  {data.genre.includes("Sci-fi") ? (
                    <label className="inline-flex items-center pr-3">
                      <input
                        type="checkbox"
                        value="Sci-fi"
                        defaultChecked
                        {...register("genre", { required: true })}
                      />
                      <span className="ml-2">Sci-fi</span>
                    </label>
                  ) : (
                    <label className="inline-flex items-center pr-3">
                      <input
                        type="checkbox"
                        value="Sci-fi"
                        {...register("genre", { required: true })}
                      />
                      <span className="ml-2">Sci-fi</span>
                    </label>
                  )}
                  {data.genre.includes("Comedy") ? (
                    <label className="inline-flex items-center pr-3">
                      <input
                        type="checkbox"
                        value="Comedy"
                        defaultChecked
                        {...register("genre", { required: true })}
                      />
                      <span className="ml-2">Comedy</span>
                    </label>
                  ) : (
                    <label className="inline-flex items-center pr-3">
                      <input
                        type="checkbox"
                        value="Comedy"
                        {...register("genre", { required: true })}
                      />
                      <span className="ml-2">Comedy</span>
                    </label>
                  )}
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
                    defaultValue={data.duration}
                    className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
                    {...register("duration", { required: true })}
                  />
                  {errors.duration && (
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
                    defaultValue={data.date}
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
                    defaultValue={data.rating}
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
                    defaultValue={data.language}
                    className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
                    {...register("language", {
                      required: true,
                    })}
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
                    defaultValue={data.trailer}
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
// export async function getStaticPaths() {
//   const res = await fetch(`${BASE_URL}/videos`);
//   const data = await res.json();
//   const paths = data.map((item) => ({
//     params: { id: item._id },
//   }));
//   return { paths, fallback: false };
// }

export async function getServerSideProps({ params }) {
  console.log(params);
  const res = await fetch(`${BASE_URL}/videos/${params.id}`);
  const data = await res.json();
  return {
    props: { data },
  };
}
export default MovieEdit;
