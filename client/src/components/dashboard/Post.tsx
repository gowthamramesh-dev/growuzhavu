import { useState } from "react";

const Post = () => {
  const [post, setPost] = useState(false);
  return (
    <>
      <div className="h-screen w-full flex  items-center justify-center">
        {post ? (
          <div onClick={() => setPost(false)} className="">
            Post
          </div>
        ) : (
          <div className="flex items-baseline gap-5 opacity-50">
            <i className="bi bi-basket3 text-6xl"></i>
            No Post Yet
          </div>
        )}
      </div>
    </>
  );
};

export default Post;
