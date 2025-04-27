import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const PostCreation = () => {
  const { id } = useParams();
  const d = new Date();
  const date = d.toJSON().slice(0, 10).split("-").reverse().join("-");
  const m = d.getMinutes();
  const h = d.getHours();
  const ampm = h >= 12 ? "PM" : "AM";
  const time = `${h % 12 || 12}:${m < 10 ? "0" + m : m} ${ampm}`;

  const [data, setData] = useState({
    author: id,
    picture: "",
    commodityName: "",
    commodityPrice: "",
    commodityDescription: "",
    date: date,
    time: time,
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData(function (prevData) {
          return {
            ...prevData,
            picture: reader.result,
          };
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Optional basic validation
    if (
      !data.commodityName ||
      !data.commodityPrice ||
      !data.commodityDescription
    ) {
      alert("Please fill all the fields");
      return;
    }
    try {
      const res = await axios.post(
        "http://localhost:5000/api/farmers/createPost",
        data
      );
      console.log("Server Response:", res.data);
      alert("Post created successfully!");
    } catch (err) {
      console.error("Error during post creation:", err);
      alert("Failed to create post");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full my-5    min-h-screen">
      {/* Form Section */}
      <div className="flex flex-col gap-5 w-full p-5 border bg-slate-950 border-green-500 lg:w-1/2">
        <div className="text-2xl font-bold">{id} / create-post</div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-md">
          <div>
            <label className="block mb-1 text-white">Upload Image</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="file:cursor-pointer w-fit h-fit bg-slate-500 p-2 file:px-2 file:text-white file:bg-yellow-500 rounded file:rounded"
            />
          </div>
          <div>
            <label className="block mb-1 text-white">Commodity Name</label>
            <input
              type="text"
              name="commodityName"
              value={data.commodityName}
              onChange={handleInputChange}
              className="bg-slate-500 w-full h-10 rounded outline-none p-2"
            />
          </div>
          <div>
            <label className="block mb-1 text-white">Commodity Price</label>
            <input
              type="text"
              name="commodityPrice"
              value={data.commodityPrice}
              onChange={handleInputChange}
              className="bg-slate-500 w-full h-10 rounded outline-none p-2"
            />
          </div>
          <div>
            <label className="block mb-1 text-white">
              Commodity Description
            </label>
            <textarea
              name="commodityDescription"
              value={data.commodityDescription}
              onChange={handleInputChange}
              className="bg-slate-500 w-full h-28 rounded outline-none p-2"
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-white w-fit px-4 py-2 rounded hover:cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Preview Section */}
      <div className="w-full lg:w-1/2 p-2 border bg-slate-950 border-green-500 flex justify-center">
        <div className="w-full max-w-3xl flex flex-col items-center gap-0">
          <div className="w-4/5 lg:w-3/4 h-52 lg:h-96 flex justify-center border border-green-500 items-center">
            {data.picture && (
              <img
                className="h-full w-full border border-green-500 object-cover"
                src={data.picture}
                alt={data.commodityName || "Uploaded preview"}
              />
            )}
          </div>
          <div className="w-4/5 lg:w-3/4 flex flex-col gap-2 lg:p-2">
            <div className="flex justify-between">
              <h1 className="text-md font-bold">
                {data.commodityName || "Commodity Name"}
              </h1>
              <h1 className="text-md lg:text-xl text-yellow-500">
                Per k/g ₹ {data.commodityPrice}
              </h1>
            </div>
            <p className="text-white">
              {data.commodityDescription || "This is the discription"}
            </p>
            <div className="flex justify-between text-sm lg:text-lg text-gray-300">
              <span>Listed at: {data.date}</span>
              <span>Time: {data.time}</span>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <h1 className="text-white">Follow the Author</h1>
              <div className="border border-green-500 p-2 flex justify-between items-center">
                <Link
                  to="/dashboard/user"
                  className="flex items-center w-full gap-2 justify-between"
                >
                  <div className="flex gap-3 items-center">
                    <img
                      className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border border-green-500"
                      src="/default-avatar.png"
                      alt="Author"
                    />
                    <h1 className="text-sm lg:text-xl text-white">
                      {data.author || "Author Name"}
                    </h1>
                  </div>
                  <i className="bi text-2xl bi-arrow-right-circle text-white"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCreation;
