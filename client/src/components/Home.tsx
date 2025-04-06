import Banner from "../../public/Banner.png";
import HomePrice from "./HomePrice";

const Home = () => {
  const sampleData = [
    {
      id: 1,
      name: "Carrot",
      description: "A crunchy, orange root vegetable rich in beta-carotene.",
      price: 50,
      picture:
        "http://www.theayurveda.org/wp-content/uploads/2015/09/Carrot-fruits.jpg",
      date: "2025-03-24",
      time: "10:15 AM",
    },
    {
      id: 2,
      name: "Broccoli",
      description:
        "A green vegetable resembling a miniature tree, high in vitamins C and K.",
      price: 80,
      picture:
        "https://veritablevegetable.com/wp-content/uploads/2023/01/fresh-green-broccoli-macro-photo-top-view-scaled.jpg",
      date: "2025-03-25",
      time: "02:30 PM",
    },
    {
      id: 3,
      name: "Spinach",
      description: "A leafy green vegetable known for its high iron content.",
      price: 60,
      picture:
        "https://veggieharvest.com/wp-content/uploads/2020/11/spinach.jpg",
      date: "2025-03-24",
      time: "09:45 AM",
    },
    {
      id: 4,
      name: "Tomato",
      description: "A red, juicy fruit often used as a vegetable in cooking.",
      price: 40,
      picture:
        "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
      date: "2025-03-25",
      time: "04:20 PM",
    },
    {
      id: 5,
      name: "Potato",
      description: "A starchy tuber that is a staple in many diets worldwide.",
      price: 30,
      picture:
        "https://cdn-prod.medicalnewstoday.com/content/images/articles/280/280579/potatoes-can-be-healthful.jpg",
      date: "2025-03-24",
      time: "12:05 PM",
    },
    {
      id: 6,
      name: "Cucumber",
      description:
        "A long, green vegetable with high water content, often eaten raw.",
      price: 35,
      picture:
        "https://www.tasteofhome.com/wp-content/uploads/2018/06/shutterstock_520879192.jpg?w=1200",
      date: "2025-03-25",
      time: "06:40 PM",
    },
    {
      id: 7,
      name: "Bell Pepper",
      description:
        "A colorful, sweet pepper available in green, red, yellow, and orange varieties.",
      price: 70,
      picture:
        "https://www.almanac.com/sites/default/files/image_nodes/bell-peppers-assorted-crop.jpg",
      date: "2025-03-24",
      time: "08:22 AM",
    },
    {
      id: 8,
      name: "Eggplant",
      description: "A purple, spongy vegetable also known as aubergine.",
      price: 55,
      picture:
        "http://media.advance.net/national_desk_food_blog/photo/Eggplant_portrait.jpg",
      date: "2025-03-25",
      time: "07:10 PM",
    },
    {
      id: 9,
      name: "Lettuce",
      description: "A leafy green commonly used in salads and sandwiches.",
      price: 45,
      picture:
        "https://i5.walmartimages.com/asr/b48d2291-4708-45d6-9c53-9ccb0be73923_2.4f4f3c306a4fc9d8a9d4a6c350b164d8.jpeg",
      date: "2025-03-24",
      time: "01:55 PM",
    },
    {
      id: 10,
      name: "Onion",
      description: "A bulb vegetable known for its pungent flavor and aroma.",
      price: 25,
      picture: "https://cdn.britannica.com/08/187208-050-E4233521/onions.jpg",
      date: "2025-03-25",
      time: "11:33 AM",
    },
  ];
  return (
    <>
      <div className=" w-full bg-neutral-950 p-1.5 lg:p-3">
        <div className="lg:p-3">
          <div className="border border-green-500 ">
            {/* Image */}
            <img className="w-full h-60 object-cover" src={Banner} alt="" />
            {/* <div className="">
              <h1 className="">GrowUzhavu</h1>
              <h3 className="">Let's Connect With Market</h3>
            </div> */}
          </div>
          <div className="p-2 lg:p-5 flex justify-between">
            {/* Nav Buttons */}
            <ul className="flex gap-2.5 items-center **:text-sm lg:**:text-lg *:border **:border-green-500">
              <li>
                <button className="px-3 bg-slate-950  rounded-xs ">
                  For You
                </button>
              </li>
              <li>
                <button className="px-3 bg-slate-950  rounded-xs ">Top</button>
              </li>
              <li>
                <button className="px-3 bg-slate-950  rounded-xs ">
                  Latest
                </button>
              </li>
            </ul>
            <div className="lg:text-lg flex gap-3">
              {/* sort variablity */}

              {/* Sort button */}

              <i className="bi bi-sort-up hover:cursor-pointer"></i>
              <i className="bi bi-sort-down-alt hover:cursor-pointer"></i>
            </div>
          </div>
          <div className="flex bg-slate-950 *:border *:border-green-500 gap-5">
            <div
              id="items"
              className="p-3 flex justify-center lg:justify-start  flex-wrap gap-6 lg:w-5/6 w-full bg-slate-950"
            >
              {sampleData.map((data) => (
                <div
                  className="w-72 h-80 lg:w-80 lg:h-96 border border-green-500"
                  key={data.id}
                >
                  <div className="w-full h-full flex flex-col items-center bg-slate-950 p-1.5 lg:p-3">
                    <img
                      className="w-full h-48 lg:h-4/6 border border-green-500"
                      src={data.picture}
                      alt={data.name}
                    />
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full flex justify-center items-center absolute z-0 transform translate-x-25 translate-y-2 lg:translate-x-27 lg:translate-y-2 bg-white border border-green-500">
                      <i className="bi bi-person-fill text-gray-700 text-4xl"></i>
                    </div>
                    <div className="w-full h-2/6 flex justify-start">
                      <div className="flex flex-col justify-around">
                        <h1 className=" font-bold flex justify-between">
                          <div className="flex items-baseline text-sm lg:text-md gap-1">
                            {data.name}
                            <div className="font-light text-xs">
                              {data.time}
                            </div>
                          </div>
                          <div className="font-normal flex items-center gap-0.5 text-sm lg:text-md lg:gap-2 text-yellow-400">
                            <div className="text-xs">per k/g </div>₹{" "}
                            {data.price}
                          </div>
                        </h1>
                        <div className="text-xs lg:text-sm">
                          {data.description}
                        </div>
                        <div className="font-light text-xs flex justify-between items-center">
                          {data.date}{" "}
                          <button
                            className="px-2 lg:px-4 py-1.5 bg-yellow-400 font-bold flex gap-0.5 justify-baseline hover:cursor-pointer"
                            type="button"
                          >
                            Buy<i className="bi bi-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden border w-1/4 lg:flex ">
              <HomePrice />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
