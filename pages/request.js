import React from "react";
import { useForm } from "react-hook-form";
const Request = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section className="flex">
      <div className="w-10/12 pt-[20px] mx-auto">
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
                    className="py-2 rounded text-black pl-3 outline outline-offset-2 outline-1  w-full"
                    {...register("genre")}
                  />
                </div>
              </div>

              <div className="flex py-2">
                <p className="py-2 w-3/12">Release Date</p>
                <div className="w-7/12">
                  <input
                    type="date"
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
  );
};

export default Request;
