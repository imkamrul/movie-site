import { BASE_URL } from "../../../util/Url";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardNav from "../../../components/Section/DashboardNav";
import { useRouter } from "next/router";

const SliderEdit = ({ data }) => {
  const router = useRouter();
  const error = (text) => toast.error(text);
  const success = (text) => toast.success(text);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (value) => {
    console.log(value);
    setLoading(true);
    try {
      const res = await axios.put(`${BASE_URL}/slider/${data._id}`, value);
      console.log(res);
      if (res.data.matchedCount == 1) {
        setLoading(false);
        success("Success, Slider Data Update");
        setTimeout(() => {
          router.push("/Dashboard/Slider");
        }, 5000);
      }
    } catch (err) {
      setLoading(false);
      error("Error, Can't update Slider");
    }
  };
  return (
    <section className="flex">
      <DashboardNav />
      <div className="w-10/12 pt-[20px] ">
        <ToastContainer />
        <div className="text-right">
          <Link href="/Dashboard/Slider">
            <a className="bg-themeText text-white text-lg px-3 py-2 rounded mx-5">
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
                  {data.catagory === "Hero_Slider" ? (
                    <label className="cursor-pointer">
                      <input
                        {...register("catagory", { required: true })}
                        type="radio"
                        value="Hero_Slider"
                        className=" ml-5 mr-2"
                        defaultChecked
                      />
                      Hero Slider
                    </label>
                  ) : (
                    <label className="cursor-pointer">
                      <input
                        {...register("catagory", { required: true })}
                        type="radio"
                        value="Hero_Slider"
                        className=" ml-5 mr-2"
                      />
                      Hero Slider
                    </label>
                  )}
                  {data.catagory === "Comming_soon" ? (
                    <label className="cursor-pointer">
                      <input
                        {...register("catagory", { required: true })}
                        type="radio"
                        value="Comming_soon"
                        className=" ml-5 mr-2"
                        defaultChecked
                      />
                      Comming Soon
                    </label>
                  ) : (
                    <label className="cursor-pointer">
                      <input
                        {...register("catagory", { required: true })}
                        type="radio"
                        value="Comming_soon"
                        className=" ml-5 mr-2"
                      />
                      Comming Soon
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
                    defaultValue={data.name}
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
                    defaultValue={data.info}
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
                <p className="py-2 w-3/12">Movie Type</p>

                <div className="w-7/12">
                  {data.Type.includes("Action") ? (
                    <label className="inline-flex items-center pr-6">
                      <input
                        type="checkbox"
                        value="Action"
                        defaultChecked
                        {...register("Type", { required: true })}
                      />
                      <span className="pl-2">Action</span>
                    </label>
                  ) : (
                    <label className="inline-flex items-center pr-6">
                      <input
                        type="checkbox"
                        value="Action"
                        {...register("Type", { required: true })}
                      />
                      <span className="pl-2">Action</span>
                    </label>
                  )}
                  {data.Type.includes("Romantic") ? (
                    <label className="inline-flex items-center pr-6">
                      <input
                        type="checkbox"
                        value="Romantic"
                        defaultChecked
                        {...register("Type", { required: true })}
                      />
                      <span className="pl-2">Romantic</span>
                    </label>
                  ) : (
                    <label className="inline-flex items-center pr-6">
                      <input
                        type="checkbox"
                        value="Romantic"
                        {...register("Type", { required: true })}
                      />
                      <span className="pl-2">Romantic</span>
                    </label>
                  )}

                  {data.Type.includes("Adventure") ? (
                    <label className="inline-flex items-center pr-3">
                      <input
                        type="checkbox"
                        value="Adventure"
                        defaultChecked
                        {...register("Type", { required: true })}
                      />
                      <span className="ml-2">Adventure</span>
                    </label>
                  ) : (
                    <label className="inline-flex items-center pr-3">
                      <input
                        type="checkbox"
                        value="Adventure"
                        {...register("Type", { required: true })}
                      />
                      <span className="ml-2">Adventure</span>
                    </label>
                  )}
                  {data.Type.includes("Adventure") ? (
                    <label className="inline-flex items-center pr-3">
                      <input
                        type="checkbox"
                        value="Thriller"
                        defaultChecked
                        {...register("Type", { required: true })}
                      />
                      <span className="ml-2">Thriller</span>
                    </label>
                  ) : (
                    <label className="inline-flex items-center pr-3">
                      <input
                        type="checkbox"
                        value="Thriller"
                        {...register("Type", { required: true })}
                      />
                      <span className="ml-2">Thriller</span>
                    </label>
                  )}
                  {data.Type.includes("Sci-fi") ? (
                    <label className="inline-flex items-center pr-3">
                      <input
                        type="checkbox"
                        value="Sci-fi"
                        defaultChecked
                        {...register("Type", { required: true })}
                      />
                      <span className="ml-2">Sci-fi</span>
                    </label>
                  ) : (
                    <label className="inline-flex items-center pr-3">
                      <input
                        type="checkbox"
                        value="Sci-fi"
                        {...register("Type", { required: true })}
                      />
                      <span className="ml-2">Sci-fi</span>
                    </label>
                  )}
                  {data.Type.includes("Comedy") ? (
                    <label className="inline-flex items-center pr-3">
                      <input
                        type="checkbox"
                        value="Comedy"
                        defaultChecked
                        {...register("Type", { required: true })}
                      />
                      <span className="ml-2">Comedy</span>
                    </label>
                  ) : (
                    <label className="inline-flex items-center pr-3">
                      <input
                        type="checkbox"
                        value="Comedy"
                        {...register("Type", { required: true })}
                      />
                      <span className="ml-2">Comedy</span>
                    </label>
                  )}
                  {errors.Type && (
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
                    defaultValue={data.duration}
                    type="text"
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
                <p className="py-2 w-3/12">Director</p>
                <div className="w-7/12">
                  <input
                    defaultValue={data.director}
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
                    defaultValue={data.trailer}
                    className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
                    {...register("trailer", { required: true })}
                  />
                  {errors.trailer && (
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
                    defaultValue={data.download_link}
                    className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
                    {...register("download_link", { required: true })}
                  />
                  {errors.download_link && (
                    <p className="text-[red] text-xs py-2">
                      This field is required
                    </p>
                  )}
                </div>
              </div>
              <div className="flex py-2">
                <p className="py-2 w-3/12">Banner Image</p>
                <div className="w-7/12">
                  <input
                    type="text"
                    defaultValue={data.banner_image}
                    className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
                    {...register("banner_image", {
                      required: true,
                    })}
                  />
                  {errors.banner_image && (
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
                    defaultValue={data.subtitle}
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
                    defaultValue={data.quality}
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

export async function getStaticPaths() {
  const res = await fetch(`${BASE_URL}/slider`);
  const data = await res.json();
  const paths = data.map((item) => ({
    params: { id: item._id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  console.log(params);
  const res = await fetch(`${BASE_URL}/slider/${params.id}`);
  const data = await res.json();
  return {
    props: { data },
  };
}

export default SliderEdit;
