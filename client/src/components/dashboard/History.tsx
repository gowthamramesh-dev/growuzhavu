import { useState } from "react";

const History = () => {
  const [history, setHistory] = useState(false);
  return (
    <>
      <div className="h-screen w-full flex  items-center justify-center">
        {history ? (
          <div onClick={() => setHistory(false)} className="">
            History
          </div>
        ) : (
          <div className="flex items-baseline gap-5 opacity-50">
            <i className="bi bi-clock-history text-6xl"></i> No Trade Yet
          </div>
        )}
      </div>
    </>
  );
};

export default History;
