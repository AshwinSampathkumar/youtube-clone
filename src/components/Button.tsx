import React from "react";

const Button: React.FC<any> = ({ name }) => {
  return (
    <div>
      <button className="px-5 py-1 m-2 bg-gray-100 rounded-md hover:bg-gray-200 ">
        {" "}
        {name}{" "}
      </button>
    </div>
  );
};

export default Button;
