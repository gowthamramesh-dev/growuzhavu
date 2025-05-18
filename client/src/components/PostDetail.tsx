import { useParams, Link } from "react-router-dom";
import HomePrice from "./HomePrice";
import { useEffect, useState } from "react";
import axios from "axios";

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

const PostDetail = () => {
  const [post, setPost] = useState<Post | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    axios
      .post("http://localhost:5000/api/farmers/postDetails", { id })
      .then((res) => setPost(res.data[0]))
      .catch((err) => console.error("Error fetching post:", err));
  }, [id]);

  return (
    <div className="flex gap-5 p-2 lg:p-5">
      <div className="w-full h-fit lg:w-5/6 p-2 border border-green-500 bg-slate-950">
        {post ? (
          <div className="flex flex-col gap-2">
            <h1 className="text-sm lg:text-2xl">
              Home {"/"} post {"/"} {id} {"/"} {post.commodityName}
            </h1>
            <br />
            <div className="flex justify-center items-center">
              <img
                className="w-4/5 lg:w-2/4 h-52 lg:h-96 object-cover border border-green-500"
                src={post.picture}
                alt={post.commodityName}
              />
            </div>

            <div className="flex justify-center">
              <div className="w-4/5 lg:w-2/4 p-2 flex flex-col gap-3">
                <div className="flex justify-between">
                  <h1 className="text-md lg:text-xl font-bold">
                    {post.commodityName}
                  </h1>
                  <h1 className="text-md lg:text-xl text-yellow-500">
                    ₹ {post.commodityPrice} /kg
                  </h1>
                </div>

                <p className="text-sm lg:text-base">
                  {post.commodityDescription}
                </p>

                <div className="flex justify-between text-sm lg:text-lg">
                  <span>Listed at: {post.date}</span>
                  <span>Time: {post.time}</span>
                </div>

                <div className="flex flex-col gap-2 mt-2">
                  <h1 className="text-sm lg:text-base">Follow the Author</h1>
                  <div className="p-2 border border-green-500 flex justify-between items-center">
                    <Link
                      to="/dashboard/user"
                      className="flex items-center gap-2"
                    >
                      <img
                        className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-green-500"
                        src="/author-placeholder.jpg"
                        alt="Author"
                      />
                      <span className="text-sm lg:text-xl">
                        {post.author || "Author Name"}
                      </span>
                    </Link>
                    <i className="bi bi-arrow-right-circle text-2xl text-green-500"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-dvh z-40 flex items-center justify-center text-white">
            <div
              className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-500"
              style={{ animationDuration: "6s" }}
            ></div>
          </div>
        )}
      </div>

      <div className="hidden h-screen lg:flex w-1/4 border border-green-500 bg-slate-950 overflow-scroll no-scrollbar">
        <HomePrice />
      </div>
    </div>
  );
};

export default PostDetail;
