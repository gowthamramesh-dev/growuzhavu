import { useState } from "react";

const Post = () => {
  const [post, setPost] = useState(false);
  return (
    <>
      <div className="h-screen *:bg-slate-950  *:p-3 *:border *:border-green-500 *:h-full ">
        {post ? (
          <div onClick={() => setPost(false)} className="">
            Post
          </div>
        ) : (
          <div className="h-screen w-full flex  items-center justify-center">
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
