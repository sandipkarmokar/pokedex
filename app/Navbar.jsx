import React from "react";

const Navbar = () => {
  return (
    <div className="bg-red-600 sm:h-24 h-16 p-8">
      <div className="container mx-auto flex  items-center justify-between text-blue-200 h-full">
        <div>
          <p>Pokedex</p>
        </div>
        <div>
          <p>Github</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
