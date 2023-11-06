import React from "react";

export const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      <div className="relative rounded-xl">
        <div className="absolute w-full h-full text-white bg-black/70 rounded-xl">
          <p className="px-2 pt-4 text-2xl font-bold">Sun's Out, BOGO's Out</p>
          <p className="px-2">Through 8\26</p>
          <button className="absolute px-3 py-2 mx-2 text-black bg-white border-white rounded-2xl bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="relative rounded-xl">
        <div className="absolute w-full h-full text-white bg-black/70 rounded-xl">
          <p className="px-2 pt-4 text-2xl font-bold">Sun's Out, BOGO's Out</p>
          <p className="px-2">Through 8\26</p>
          <button className="absolute px-3 py-2 mx-2 text-black bg-white border-white rounded-2xl bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1609501676725-7186f017a4b7?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8"
          alt=""
        />
      </div>
      <div className="relative rounded-xl">
        <div className="absolute w-full h-full text-white bg-black/70 rounded-xl">
          <p className="px-2 pt-4 text-2xl font-bold">Sun's Out, BOGO's Out</p>
          <p className="px-2">Through 8\26</p>
          <button className="absolute px-3 py-2 mx-2 text-black bg-white border-white rounded-2xl bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
};
