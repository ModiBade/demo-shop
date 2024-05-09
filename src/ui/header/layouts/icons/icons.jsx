import { BsBasket } from "react-icons/bs";
import { FaGrinHearts } from "react-icons/fa";

const Icons = () => {

    return (
        <div className="flex items-center">
            <button className="hidden sm:inline group relative transition bg-red-100 hover:bg-pink-500 text-pink-600 hover:text-white px-3 py-[11px] rounded-lg text-lg ml-2">
                <FaGrinHearts />
                <span className="absolute transition top-0 right-[-5px] bg-pink-500 group-hover:bg-white text-white group-hover:text-pink-500 text-xs rounded-full p-[5px] ">1</span>
            </button>
            <button className="group relative transition bg-blue-100 hover:bg-sky-500 text-sky-600 hover:text-white px-3 py-[11px] rounded-lg text-lg">
                <BsBasket />
                <span className="absolute transition top-0 right-[-5px] bg-sky-500 group-hover:bg-white text-white group-hover:text-sky-500 text-xs rounded-full p-[5px] ">1</span>
            </button>
        </div>
    )

}

export default Icons;