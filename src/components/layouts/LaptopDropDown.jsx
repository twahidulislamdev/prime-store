import React, { useState } from "react";
import { RiArrowDropUpLine } from "react-icons/ri";

const LaptopDropDown = () => {
  let [open, setOpen] = useState(false);

  const handleItemClick = (item) => {
    console.log(`Clicked: ${item}`);
    setOpen(false);
  };
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h5 className="text-lg font-medium">Laptop</h5>
        <RiArrowDropUpLine
          className={`text-3xl font-semibold cursor-pointer ${
            open ? "rotate-180" : ""
          }`}
          onClick={() => setOpen(!open)}
        />
      </div>
      {open && (
        <div className="mt-2 space-y-2 ">
          <li
            onClick={() => handleItemClick("Samsung")}
            className="text-base text-gray-800 hover:cursor-pointer hover:bg-gray-200 hover:rounded-md"
          >
            Asus
          </li>
          <li
            onClick={() => handleItemClick("Samsung")}
            className="text-base text-gray-800 hover:cursor-pointer hover:bg-gray-200 hover:rounded-md"
          >
            HP
          </li>
          <li
            onClick={() => handleItemClick("Samsung")}
            className="text-base text-gray-800 hover:cursor-pointer hover:bg-gray-200 hover:rounded-md"
          >
            Dell
          </li>
          <li
            onClick={() => handleItemClick("Samsung")}
            className="text-base text-gray-800 hover:cursor-pointer hover:bg-gray-200 hover:rounded-md"
          >
            Acer
          </li>
          <li
            onClick={() => handleItemClick("Samsung")}
            className="text-base text-gray-800 hover:cursor-pointer hover:bg-gray-200 hover:rounded-md"
          >
            Lenovo
          </li>
          <li
            onClick={() => handleItemClick("Samsung")}
            className="text-base text-gray-800 hover:cursor-pointer hover:bg-gray-200 hover:rounded-md"
          >
            Apple (MacBook)
          </li>
          <li
            onClick={() => handleItemClick("Samsung")}
            className="text-base text-gray-800 hover:cursor-pointer hover:bg-gray-200 hover:rounded-md"
          >
            Samsung
          </li>
          <li
            onClick={() => handleItemClick("Samsung")}
            className="text-base text-gray-800 hover:cursor-pointer hover:bg-gray-200 hover:rounded-md"
          >
            Huawei
          </li>
          <li
            onClick={() => handleItemClick("Samsung")}
            className="text-base text-gray-800 hover:cursor-pointer hover:bg-gray-200 hover:rounded-md"
          >
             Gigabyte
          </li>
        </div>
      )}
    </div>
  );
};

export default LaptopDropDown;
