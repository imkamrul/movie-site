import axios from "axios";
import React from "react";

import Swal from "sweetalert2";
import { BASE_URL } from "../../util/Url";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const Table = ({ content, setData, link, view, type }) => {
  const error = (text) => toast.error(text);
  const success = (text) => toast.success(text);
  const info = (text) => toast.info(text);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await axios.delete(`${BASE_URL}/${link}/${id}`);
        if (result.data.deletedCount === 1) {
          const newData = content.filter((item) => item._id !== id);
          setData(newData);
          success(
            `Success,${
              link === "Videos" ? "Video" : "Slider"
            }  has been deleted`
          );
        } else {
          error(
            `Error, Cannot deleted ${link === "Videos" ? "Video" : "Slider"}`
          );
        }
      } else {
        info("Delete Cancel");
      }
    });
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <ToastContainer />
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Movie Name
              </th>
              {type && (
                <th scope="col" className="px-6 py-3">
                  Type
                </th>
              )}
              {type ? (
                <th scope="col" className="px-6 py-3">
                  Genre
                </th>
              ) : (
                <th scope="col" className="px-6 py-3">
                  Catagory
                </th>
              )}

              <th scope="col" className="px-6 py-3">
                Year
              </th>
              <th scope="col" className="px-6 py-3">
                Rating
              </th>

              <th scope="col" className="px-3 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {content.map((item) => {
              return (
                <tr
                  key={item._id}
                  className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
                >
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {item.name}
                  </td>
                  {type ? (
                    <td scope="col" className="px-6 py-3">
                      {item.type}
                    </td>
                  ) : (
                    ""
                  )}
                  {type ? (
                    <td scope="col" className="px-6 py-3">
                      {item.genre?.map((type, index) => (
                        <span className="inline-block pr-2" key={index}>
                          {type} {item.genre.length - 1 !== index && ","}
                        </span>
                      ))}
                    </td>
                  ) : (
                    <td scope="col" className="px-6 py-3">
                      {item.catagory}
                    </td>
                  )}

                  <td className="px-6 py-4">{item.date}</td>
                  <td className="px-6 py-4">{item.rating}</td>
                  <td className="px-6 py-4 text-center">
                    {/* {view && (
                      <Link href={`/${link}/${item._id}`}>
                        <a className="mx-3 font-medium text-white hover:underline">
                          View
                        </a>
                      </Link>
                    )} */}
                    <Link href={`/Dashboard/${link}/${item._id}`}>
                      <a className="mx-3 font-medium text-themeText hover:underline">
                        Edit
                      </a>
                    </Link>

                    <a
                      onClick={() => handleDelete(item._id)}
                      className="mx-3 font-medium text-[red] hover:underline cursor-pointer"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
