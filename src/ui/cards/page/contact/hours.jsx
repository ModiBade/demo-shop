"use client"
import { LuCalendarDays } from "react-icons/lu";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const WorkingHours = () => {

    const general = useSelector(state => state.settings.general);

    return (
        <div className="flex items-center bg-blue-100 text-blue-600 rounded-xl px-3 py-2 w-[33%]">
            <LuCalendarDays className="text-4xl" />
            <div className="mr-3">
                <div className="text-2xl font-normal">ساعت کاری</div>
                {
                    general ?
                        <div className="font-iran font-normal text-sm mt-1">{general.working_hours}</div>
                        :
                        <Skeleton baseColor="#2563eb" height={5} width={250} />
                }
            </div>
        </div>
    )

}

export default WorkingHours;