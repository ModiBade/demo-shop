import { FiSearch } from "react-icons/fi";
import { RiLoader5Fill } from "react-icons/ri";

const MobileSearch = () => {

    return (
        <div className="sm:hidden flex item-center mt-4">
            <input className="bg-slate-100 w-full text-sm p-3 rounded-r-lg focus:outline-0 " placeholder="نام محصول مورد نظرتان را وارد کنید" />
            <div className="bg-slate-100 rounded-l-lg py-[11px] pl-[15px] text-slate-500 text-2xl">
                {/* <RiLoader5Fill className="animate-spin" /> */}
                <FiSearch />
            </div>
        </div>
    )

}

export default MobileSearch;