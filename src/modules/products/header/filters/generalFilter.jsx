"use client"

import Link from "next/link";
import { useSearchParams } from 'next/navigation'

const GeneralFilter = () => {

    const searchParams = useSearchParams();
    const params = Object.fromEntries(searchParams);

    const handleDisplay = filter => {
        let query = { ...params };
        query.order = filter;
        return query;
    }

    return (
        <ul className="flex items-center font-iran font-normal text-xs">
            <li className={`transition cursor-pointer px-4 py-2 ${params.order === "new" && `border-b-2 border-blue-500`} ${!params.order && `border-b-2 border-blue-500`}`}>
                <Link href={{ query: handleDisplay("new") }}>جدیدترین</Link>
            </li>
            <li className={`transition cursor-pointer px-4 py-2 ${params.order === "cheap" && `border-b-2 border-blue-500`}`}>
                <Link href={{ query: handleDisplay("cheap") }}>ارزان ترین</Link>
            </li>
            <li className={`transition cursor-pointer px-4 py-2 ${params.order === "exp" && `border-b-2 border-blue-500`}`}>
                <Link href={{ query: handleDisplay("exp") }}>گران ترین</Link>
            </li>
            <li className={`transition cursor-pointer px-4 py-2 ${params.order === "seller" && `border-b-2 border-blue-500`}`}>
                <Link href={{ query: handleDisplay("seller") }}>پرفروش ترین</Link>
            </li>
        </ul>
    )

}

export default GeneralFilter;