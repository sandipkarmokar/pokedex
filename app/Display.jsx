import React from "react";

const Display = () => {
  return (
    <div className="bg-red-200 h-[655px]">
      <div className="container mx-auto flex  items-center justify-between text-black">
        <form action="" className="mt-20 w-full shadow-xl">
          <input
            type="text"
            className="p-6 w-9/12 text-[24px] rounded-l-xl"
            placeholder="Search for any pokemon........"
          />
          <button className="p-6 w-3/12 text-white bg-red-600 text-[24px] rounded-r-xl shadow-xl">
            Go For It
          </button>
        </form>
      </div>
    </div>
  );
};

export default Display;
