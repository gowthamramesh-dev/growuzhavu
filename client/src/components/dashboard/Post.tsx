import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "../Card";

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
  const [posts, setPosts] = useState<Post[]>([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    axios
      .post(`http://localhost:5000/api/farmers/getPosts`, { id: id })
      .then((result) => {
        setPosts(result.data);
      })
      .catch((err) => {
        console.error("Failed to fetch posts:", err);
        setHasError(true);
      });
  }, [id]);

  return (
    <div className="h-full p-3 border border-green-500 bg-slate-950">
      {hasError ? (
        <div className="w-full h-screen flex items-center justify-center text-white opacity-50">
          <div className="text-center">
            <i className="bi bi-basket3 text-6xl block mb-2"></i>
            No Post Yet
          </div>
        </div>
      ) : posts.length > 0 ? (
        <div className="flex flex-wrap gap-5 justify-normal">
          {posts.map((item) => (
            <Card key={item._id} item={item} />
          ))}
        </div>
      ) : (
        <div className="w-full h-screen flex items-center justify-center text-white">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-500"></div>
        </div>
      )}
    </div>
  );
};

export default Post;
