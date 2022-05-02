import React, { useState } from "react";
import DashboardNav from "../components/Section/DashboardNav";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import Table from "../components/common/Table";
const customStyles = {
  content: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    left: "0",
    top: "0",
    zIndex: "90",
    backgroundColor: "transparent",
    overflow: "hidden",
    paddingTop: "80px",
  },
};
const MovieCollection = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
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
          <button
            onClick={openModal}
            className="bg-[green] text-white text-lg px-3 py-2 rounded mx-5"
          >
            Add Movie
          </button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <div className="w-6/12 bg-themeBG text-white rounded px-4 h-[500px] overflow-y-auto my-12 py-10">
              <p className="text-lg py-2">Fill the Form</p>
              <form onSubmit={handleSubmit(onSubmit)}>
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

                <input
                  type="submit"
                  className="cursor-pointer bg-[red] text-lg text-white font-semibold my-2 py-1 px-3 rounded mx-3"
                />
              </form>
              <div className="text-right">
                <button
                  onClick={closeModal}
                  className="bg-[yellow] text-lg text-black font-semibold my-2 py-1 px-3 rounded mx-3"
                >
                  close
                </button>
              </div>
            </div>
          </Modal>
        </div>

        <div className=" px-[40px] my-10">
          <Table />
        </div>
      </div>
    </section>
  );
};

export default MovieCollection;
