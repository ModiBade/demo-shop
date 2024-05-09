import { TbDimensions } from "react-icons/tb";

const SizesFilter = () => {

    return (
        <div>
            <div className="flex mb-4">
                <TbDimensions className="text-xl text-gray-500" />
                <h3 className="text-gray-500 mr-2">انتخاب سایز</h3>
            </div>
            <ul className="flex flex-row-reverse items-center">
                <li className="cursor-pointer text-xs mr-2 text-gray-500 border-2 border-gray-500 px-3 py-1 rounded-lg">بزرگ</li>
                <li className="cursor-pointer text-xs mr-2 text-gray-500 border-2 px-3 py-1 rounded-lg">متوسط</li>
                <li className="cursor-pointer text-xs mr-2 text-gray-500 border-2 px-3 py-1 rounded-lg">کوچیک</li>
            </ul>
        </div>
    )

}

export default SizesFilter;