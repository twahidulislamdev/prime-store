import { IoIosArrowBack } from "react-icons/io";

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className={`absolute top-[-70px] right-[8%] z-10 transform -translate-y-1/2 cursor-pointer w-10 h-10 rounded-[50%] border-2 border-gray-500  `}
      onClick={onClick}
    >
      <IoIosArrowBack className="text-4xl text-gray-500 rounded-full p-1 shadow" />
    </div>
  )
}

export default PrevArrow