import { FaRegUser } from "react-icons/fa";

const ClientArea = () => {

    return (
        <button className="transition flex items-center  bg-green-100 text-emerald-600 md:px-3 md:py-2 px-3 py-3 rounded-lg mr-3">
            <FaRegUser />
            <span className="mr-2 hidden md:inline">ورود | ثبت نام</span>
        </button>
    )

}

export default ClientArea;