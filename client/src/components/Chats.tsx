import { Link } from "react-router-dom";

const Chats = () => {
  const storedId = localStorage.getItem("userid");
  const id = storedId ? JSON.parse(storedId) : null;

  return (
    <>
      <div className="h-screen *:bg-slate-950 mt-3 *:p-3 *:border *:border-green-500 *:h-full">
        <div className="flex *:border *:border-green-500 w-full gap-3">
          <div className="w-1/4">
            <div className="border-b border-green-500 h-15 p-2 flex items-center justify-between">
              <label className="text-2xl">Chats</label>
              <i className="bi text-md bi-search"></i>
            </div>
            <div className="">
              <Link
                className="border-y border-green-500 p-1 flex items-center gap-2"
                to=""
              >
                <img
                  className="w-13 h-13 rounded-full outline-0 border"
                  src=""
                  alt=""
                />
                <label className="text-lg">{id}</label>
              </Link>
            </div>
          </div>
          <div className="w-3/4">
            <div className="border-b border-green-500 h-15 p-2 flex items-center justify-between">
              <label className="text-">{id}</label>
              {/* <i className="bi text-md bi-search"></i> */}
            </div>
            <div className="">hello</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chats;
