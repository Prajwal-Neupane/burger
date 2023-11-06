import React, { useState } from "react";
import { data } from "../data/data";
const Food = () => {
  const [food, setFood] = useState(data);

  // Filter burger/ pizza/etc
  const filterType = (category: any) => {
    setFood(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // Filter by price
  const filterPrice = (price: any) => {
    setFood(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className="max-w-[1640px] mx-auto px-4  py-12">
      <h1 className="text-4xl font-bold text-center text-orange-700">
        Top Rated Menu Items
      </h1>

      {/*Filter Row  */}
      <div className="flex flex-col justify-between lg:flex-row">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-800">Filter Type</p>
          <div className="flex flex-wrap justify-between">
            <button
              onClick={() => setFood(data)}
              className="px-3 py-2 m-1 text-orange-700 duration-300 border-2 border-orange-600 hover:bg-orange-600 hover:text-white rounded-2xl"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="px-3 py-2 m-1 text-orange-700 duration-300 border-2 border-orange-600 hover:bg-orange-600 hover:text-white rounded-2xl"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="px-3 py-2 m-1 text-orange-700 duration-300 border-2 border-orange-600 hover:bg-orange-600 hover:text-white rounded-2xl"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="px-3 py-2 m-1 text-orange-700 duration-300 border-2 border-orange-600 hover:bg-orange-600 hover:text-white rounded-2xl"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="px-3 py-2 m-1 text-orange-700 duration-300 border-2 border-orange-600 hover:bg-orange-600 hover:text-white rounded-2xl"
            >
              Chicken
            </button>
          </div>
        </div>

        {/* filter Price */}
        <div>
          <p className="font-bold text-gray-800">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice("$")}
              className="px-3 py-2 m-1 text-orange-700 duration-300 border-2 border-orange-600 hover:bg-orange-600 hover:text-white rounded-2xl"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="px-3 py-2 m-1 text-orange-700 duration-300 border-2 border-orange-600 hover:bg-orange-600 hover:text-white rounded-2xl"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="px-3 py-2 m-1 text-orange-700 duration-300 border-2 border-orange-600 hover:bg-orange-600 hover:text-white rounded-2xl"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="px-3 py-2 m-1 text-orange-700 duration-300 border-2 border-orange-600 hover:bg-orange-600 hover:text-white rounded-2xl"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* display foods */}
      <div className="grid grid-cols-2 gap-6 pt-4 lg:grid-cols-4">
        {food.map((item, index) => {
          return (
            <div
              className="duration-300 border rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl"
              key={index}
            >
              <img
                className="object-cover w-full h-[15rem] rounded-t-lg"
                src={item.image}
                alt=""
              />
              <div className="flex justify-between p-4">
                <p className="font-semibold">{item.name}</p>
                <p>
                  <span className="p-1 bg-orange-500 rounded-full ">
                    {item.price}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Food;
