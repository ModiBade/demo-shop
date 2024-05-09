"use client"
import { FaMapPin } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Address = () => {

    const general = useSelector(state => state.settings.general);

    return (
        <div className="flex items-center bg-green-100 text-emerald-600 rounded-xl px-3 py-2 w-[33%]">
            <FaMapPin className="text-4xl" />
            <div className="mr-3">
                <div className="text-2xl font-normal">آدرس</div>
                {
                    general ?
                        <div className="font-iran font-normal text-sm mt-1">{general.address}</div>
                        :
                        <Skeleton baseColor="#22c55e" height={5} width={250} />
                }
            </div>
        </div>
    )

}

export default Address;