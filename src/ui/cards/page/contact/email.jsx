"use client"
import { HiOutlineEnvelopeOpen } from "react-icons/hi2";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Email = () => {

    const general = useSelector(state => state.settings.general);

    return (
        <div className="flex items-center bg-orange-100 text-orange-600 rounded-xl px-3 py-2 w-[16.5%]">
            <HiOutlineEnvelopeOpen className="text-4xl" />
            <div className="mr-3">
                <div className="text-2xl font-normal">ایمیل</div>
                {
                    general ?
                        <div className="font-iran font-normal text-sm mt-1">{general.email}</div>
                        :
                        <Skeleton baseColor="#f59e0b" height={5} width={100} />
                }
            </div>
        </div>
    )

}

export default Email;