import React from "react";

const Images = () => {
  return (
    <div className="container mx-auto my-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      <img
        src="https://via.placeholder.com/300"
        alt="Placeholder 1"
        className="w-full h-auto"
      />
      <img
        src="https://via.placeholder.com/300"
        alt="Placeholder 2"
        className="w-full h-auto"
      />
      <img
        src="https://via.placeholder.com/300"
        alt="Placeholder 3"
        className="w-full h-auto"
      />
    </div>
  );
};

export default Images;
