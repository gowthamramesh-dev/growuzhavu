const History = () => {
  const storedId = localStorage.getItem("userid");
  const id = storedId ? JSON.parse(storedId) : null;

  return (
    <>
      <div className="h-screen *:bg-slate-950  *:p-3 *:border *:border-green-500 *:h-full">
        <div className="p-2">
          <div className="">
            <h1 className="text-sm lg:text-2xl">
              History {"/"} {id}
            </h1>
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="w-full flex justify-end">
              <input
                className="outline-0  bg-yellow-500 rounded-xs p-0.5"
                type="date"
                name=""
                id="dates"
              />
            </div>
            <div className="h-full overflow-y-scroll no-scrollbar">
              <table className="w-full border">
                <tr className="border-b *:border-x h-15">
                  <th className="w-1/12">S.No</th>
                  <th>Commodity</th>
                  <th>Qty (kg)</th>
                  <th>Amount (per Kg)</th>
                  <th>Total Amount (in Rs)</th>
                  <th>Buyer</th>
                </tr>
                <tr className="border-b *:border-x *:p-1 ">
                  <td>1</td>
                  <td>Tomato</td>
                  <td>100</td>
                  <td>10</td>
                  <td>1000</td>
                  <td>It's Me</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
