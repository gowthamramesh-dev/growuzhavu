import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

interface Post {
  _id: string;
  author: string;
  picture: string;
  commodityName: string;
  commodityPrice: string;
  commodityDescription: string;
  date: string;
  time: string;
}

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(true);
  const [posts, setPosts] = useState<Post | null>(null); // initially null

  useEffect(() => {
    axios
      .post(`http://localhost:5000/api/farmers/getPosts`, { id: id })
      .then((result) => {
        console.log("Fetched post:", result.data);
        setPosts(result.data); // directly set the object
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <div className="h-screen *:bg-slate-950 *:p-3 *:border *:border-green-500 *:h-full">
        {post ? (
          <div className="">
            {posts ? (
              <div
                className=" h-80 lg:w-80 lg:h-96 border border-green-500 shadow-md shadow-green-700"
                key={posts._id}
              >
                <Link to={`/post/${posts.author}`}>
                  <div className="w-full h-full flex flex-col items-center bg-slate-950 p-1.5 lg:p-3">
                    {posts.picture ? (
                      <img
                        className="w-full h-48 lg:h-4/6 border border-green-500 object-cover"
                        src={posts.picture}
                        alt={posts.commodityName}
                      />
                    ) : (
                      <div className="w-full h-48 flex items-center justify-center bg-gray-800 text-white border border-green-500">
                        No Image
                      </div>
                    )}
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full flex justify-center items-center absolute z-0 transform translate-x-25 translate-y-2 lg:translate-x-27 lg:translate-y-2 bg-white border border-green-500">
                      <i className="bi bi-person-fill text-gray-700 text-4xl"></i>
                    </div>
                    <div className="w-full h-2/6 flex text-white justify-start">
                      <div className="flex flex-col justify-around w-full">
                        <h1 className="font-bold flex justify-between">
                          <div className="flex items-baseline text-sm lg:text-md gap-1">
                            {posts.commodityName}
                            <div className="font-light text-xs">
                              {posts.time}
                            </div>
                          </div>
                          <div className="font-normal flex items-center gap-0.5 text-sm lg:text-md lg:gap-2 text-yellow-400">
                            <div className="text-xs">per k/g</div> ₹{" "}
                            {posts.commodityPrice}
                          </div>
                        </h1>
                        <div className="text-xs lg:text-sm">
                          {posts.commodityDescription}
                        </div>
                        <div className="font-light text-xs flex justify-between items-center">
                          {posts.date}
                          <button
                            className="px-2 lg:px-4 py-1.5 bg-yellow-400 font-bold text-white flex gap-0.5 justify-baseline hover:cursor-pointer"
                            type="button"
                          >
                            Buy<i className="bi bi-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-500"></div>
              </div>
            )}
          </div>
        ) : (
          <div className="h-screen w-full flex items-center justify-center">
            <div className="flex items-baseline gap-5 opacity-50">
              <i className="bi bi-basket3 text-6xl"></i>
              No Post Yet
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Post;
