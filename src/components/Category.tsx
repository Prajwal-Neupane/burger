import React from "react";
import { categories } from "../data/data";

const Category = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 ">
      <h1 className="text-4xl font-bold text-center text-orange-700">
        Top Rated Menu Items
      </h1>
      <div className="grid items-center grid-cols-2 gap-6 py-6 md:grid-cols-4">
        {categories.map((item) => {
          return (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-gray-100 rounded-lg"
            >
              <h2 className="text-xl sm:font-semibold">{item.name}</h2>
              <img className="w-20" src={item.image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
