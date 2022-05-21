import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import DashboardNav from "../../components/Section/DashboardNav";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import axios from "axios";
import { BASE_URL } from "../../util/Url";
const Request = ({ data }) => {
  const error = (text) => toast.error(text);
  const success = (text) => toast.success(text);
  const [content, setContent] = useState(data);
  const staticStatusList = ["Pending", "Processing", "Uploaded", "Not Found"];

  const statusListView = staticStatusList.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  const [loading, setLoading] = useState(false);
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
        const result = await axios.delete(`${BASE_URL}/request/${id}`);
        if (result.data.deletedCount === 1) {
          const newData = content.filter((item) => item._id !== id);
          setContent(newData);
          success(`Success,Request  deleted`);
        } else {
          error("Error, Cannot delete request");
        }
      } else {
        info("Delete Cancel");
      }
    });
  };

  const handleStatus = async (e, id) => {
    const status = e.target.value;

    setLoading(true);
    try {
      console.log(status, id);
      const res = await axios.put(`${BASE_URL}/request/${id}`, {
        status,
      });

      if (res.data.matchedCount == 1) {
        setLoading(false);
        success("Success, Status Updated");
        const res = await axios.get(`${BASE_URL}/request`);
        setContent(res.data);
      }
    } catch (err) {
      setLoading(false);
      error("Error, Can't update status");
    }
  };
  return (
    <section className="flex">
      <DashboardNav />
      <div className="w-8/12 mt-10 mx-auto">
        <ToastContainer />
        <table className="xl:w-10/12 mx-auto text-sm text-left text-gray-400">
          <thead className="text-xs  uppercase  bg-gray-700 text-gray-400 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Request Date
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>

              <th scope="col" className="px-6 py-3">
                Catagories
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Genre
              </th>
              <th scope="col" className="px-6 py-3">
                Realese Year
              </th>
              <th scope="col" className="px-6 py-3">
                Status
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
                  className="border-b bg-gray-800 border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
                >
                  {" "}
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-white whitespace-nowrap"
                  >
                    {item.request_date}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-white whitespace-nowrap"
                  >
                    {item.name}
                  </td>
                  <td className="px-6 py-4">{item.catagory}</td>
                  <td className="px-6 py-4">{item.type}</td>
                  <td className="px-6 py-4">{item.genre}</td>
                  <td className="px-6 py-4">{item.date}</td>
                  <td className="px-6 py-4">
                    <select
                      className="bg-transparent"
                      onChange={(e) => handleStatus(e, item._id)}
                      // key={item._id}
                    >
                      {staticStatusList.map((staticItem, index) => {
                        return (
                          <option
                            value={staticItem}
                            selected={item.status == staticItem}
                            key={index}
                          >
                            {staticItem}
                          </option>
                        );
                      })}
                    </select>
                  </td>
                  <td className="px-6 py-4 text-center">
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
    </section>
  );
};
export async function getServerSideProps() {
  const res = await fetch(`${BASE_URL}/request`);
  const data = await res.json();

  return {
    props: { data },
  };
}
export default Request;
