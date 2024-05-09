import { FaHeartCirclePlus } from "react-icons/fa6";

const AddProductToWishlist = ({ type }) => {

    return (
        <>
            {
                type === "preview" ?
                    <button className="transition bg-red-100 hover:bg-pink-500 text-pink-600 hover:text-white px-3 py-[11px] rounded-lg text-lg ml-2">
                        <FaHeartCirclePlus />
                    </button>
                    :
                    <button className="transition block text-slate-600 hover:bg-red-100 hover:text-pink-600 text-xl p-1 rounded-md mt-3">
                        <FaHeartCirclePlus />
                    </button>
            }
        </>
    )

}

export default AddProductToWishlist;