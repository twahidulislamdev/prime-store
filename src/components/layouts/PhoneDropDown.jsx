import React, { useState } from "react";
import { RiArrowDropUpLine } from "react-icons/ri";

const PhoneDropDown = () => {
  let [open, setOpen] = useState(false);

  const handleItemClick = (item) => {
    console.log(`Clicked: ${item}`);
    setOpen(false);
  };
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h5 className="text-lg font-medium">Smart Phone</h5>
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
            Samsung
          </li>
          <li
            onClick={() => handleItemClick("Samsung")}
            className="text-base text-gray-800 hover:cursor-pointer hover:bg-gray-200 hover:rounded-md"
          >
            Apple{" "}
          </li>
          <li
            onClick={() => handleItemClick("Samsung")}
            className="text-base text-gray-800 hover:cursor-pointer hover:bg-gray-200 hover:rounded-md"
          >
            Google{" "}
          </li>
          <li
            onClick={() => handleItemClick("Samsung")}
            className="text-base text-gray-800 hover:cursor-pointer hover:bg-gray-200 hover:rounded-md"
          >
            Xiaomi
          </li>
          <li
            onClick={() => handleItemClick("Samsung")}
            className="text-base text-gray-800 hover:cursor-pointer hover:bg-gray-200 hover:rounded-md"
          >
            Vivo
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
            Oppo
          </li>
          <li
            onClick={() => handleItemClick("Samsung")}
            className="text-base text-gray-800 hover:cursor-pointer hover:bg-gray-200 hover:rounded-md"
          >
            Realme
          </li>
          <li
            onClick={() => handleItemClick("Samsung")}
            className="text-base text-gray-800 hover:cursor-pointer hover:bg-gray-200 hover:rounded-md"
          >
            OnePlus
          </li>
          <li
            onClick={() => handleItemClick("Samsung")}
            className="text-base text-gray-800 hover:cursor-pointer hover:bg-gray-200 hover:rounded-md"
          >
            Nothing
          </li>
        </div>
      )}
    </div>
  );
};

export default PhoneDropDown;
