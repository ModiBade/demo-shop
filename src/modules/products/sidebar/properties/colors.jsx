import { IoColorFilterOutline } from "react-icons/io5";

const ColorsFilter = () => {

    return (
        <div>
            <div className="flex mb-4">
                <IoColorFilterOutline className="text-xl text-gray-500" />
                <h3 className="text-gray-500 mr-2">انتخاب رنگ</h3>
            </div>
            <ul className="flex flex-row-reverse items-center">
                <li className="cursor-pointer w-[28px] bg-pink-300 text-pink-300 rounded-md border-2 border-pink-600 mr-2">.</li>
                <li className="cursor-pointer w-[28px] bg-blue-300 text-blue-300 rounded-md border-2 border-blue-300 mr-2">.</li>
                <li className="cursor-pointer w-[28px] bg-emerald-300 text-emerald-300 rounded-md border-2 border-emerald-300 mr-2">.</li>
                <li className="cursor-pointer w-[28px] bg-orange-300 text-orange-300 rounded-md border-2 border-orange-300 mr-2">.</li>
                <li className="cursor-pointer w-[28px] bg-violet-300 text-violet-300 rounded-md border-2 border-violet-300 mr-2">.</li>
            </ul>
        </div>
    )

}

export default ColorsFilter;