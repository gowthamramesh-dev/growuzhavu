const Progress = () => {
  return (
    <>
      <div className="w-full bg-white dark:bg-neutral-950 p-1.5 lg:p-3">
        <div className="lg:p-3">
          <div className="flex items-center justify-center h-[80vh] border border-green-500 bg-slate-950 rounded-md">
            <div className="flex flex-col items-center justify-center gap-5 text-white">
              <i className="bi bi-arrow-repeat animate-spin text-6xl text-yellow-400"></i>
              <h1 className="text-xl lg:text-2xl font-semibold">
                Under Progress...
              </h1>
              <p className="text-sm lg:text-base opacity-70">
                This pages page says other features are under Progress..
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;
