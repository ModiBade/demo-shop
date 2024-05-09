"use client"
import { FaHeadphonesSimple } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Phone = () => {

    const general = useSelector(state => state.settings.general);

    return (
        <div className="flex items-center bg-pink-100 text-pink-600 rounded-xl px-3 py-2 w-[16.5%]">
            <FaHeadphonesSimple className="text-4xl" />
            <div className="mr-3">
                <div className="text-2xl font-normal">تماس</div>
                {
                    general ?
                        <div className="font-iran font-normal text-sm mt-1">{general.phone}</div>
                        :
                        <Skeleton baseColor="#ef4444" height={5} width={100} />
                }
            </div>
        </div>
    )

}

export default Phone;