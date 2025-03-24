const Login = () => {
  return (
    <>
      <div className="p-3 w-full h-full">
        <div className="bg-neutral-500 h-full flex flex-col justify-center items-center">
          <form
            className="flex flex-col bg-black h-7/12 w-7/12 items-center justify-around gap-3"
            action=""
          >
            <div className="">
              <input
                className="border border-green-500 w-3/6 h-1/6"
                type="text"
                placeholder="Username"
              />
              <input
                className="border border-green-500 w-3/6 h-1/6"
                type="text"
                placeholder="Password"
              />
            </div>
            <button>hello</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
