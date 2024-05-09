import { FiSearch } from "react-icons/fi";
import { RiLoader5Fill } from "react-icons/ri";

const DesktopSearch = () => {

    return (
        <div className="hidden sm:flex sm:item-center">
            <input className="bg-slate-100 xl:w-[40rem] lg:w-[25rem] text-sm p-3 rounded-r-lg focus:outline-0 " placeholder="نام محصول مورد نظرتان را وارد کنید" />
            <div className="bg-slate-100 rounded-l-lg py-[11px] pl-[15px] text-slate-500 text-2xl">
                {/* <RiLoader5Fill className="animate-spin" /> */}
                <FiSearch />
            </div>
        </div>
    )

}

export default DesktopSearch;