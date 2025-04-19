import { useState } from "react";
import History1 from "../History1.tsx";

const History = () => {
  const [history, setHistory] = useState(true);
  return (
    <>
      <div className="">
        {history ? (
          <div onClick={() => setHistory(false)} className="">
            <History1 />
          </div>
        ) : (
          <div className="h-screen w-full flex  items-center justify-center">
            <div className="flex items-baseline gap-5 opacity-50">
              <i className="bi bi-clock-history text-6xl"></i> No Trade Yet
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default History;
