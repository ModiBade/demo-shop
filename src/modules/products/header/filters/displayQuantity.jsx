"use client"

import Link from "next/link";
import { useSearchParams } from 'next/navigation';

const DisplayQuantity = () => {

    const searchParams = useSearchParams();
    const params = Object.fromEntries(searchParams);

    const handleDisplay = count => {
        let query = { ...params };
        query.limit = count;
        delete query.page;
        return query;
    }

    return (
        <div className="flex items-center mt-3 lg:mt-0 sm:mt-0 md:mt-3">
            <span className="text-gray-700 text-xs font-iran font-normal">تعداد نمایش</span>
            <ul className="flex items-center mr-3 font-iran font-normal text-xs">
                <li className={`transition cursor-pointer px-3 ${params.limit == 9 && `border-b-2 border-blue-500`} ${!params.limit && `border-b-2 border-blue-500`}`}>
                    <Link href={{ query: handleDisplay(9) }}>9</Link>
                </li>
                <li className={`transition cursor-pointer px-3 ${params.limit == 18 && `border-b-2 border-blue-500`}`}>
                    <Link href={{ query: handleDisplay(18) }}>18</Link>
                </li>
                <li className={`transition cursor-pointer px-3 ${params.limit == 36 && `border-b-2 border-blue-500`}`}>
                    <Link href={{ query: handleDisplay(36) }}>36</Link>
                </li>
            </ul>
        </div>
    )
}

export default DisplayQuantity;