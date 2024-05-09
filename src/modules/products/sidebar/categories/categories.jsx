"use client"

import Link from "next/link";
import { FaClipboardList } from "react-icons/fa6";
import { GoDot, GoDotFill } from "react-icons/go";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Categories = () => {

    const cats = useSelector(state => state.settings.categories);

    return (
        <div>
            <div className="flex mb-4">
                <FaClipboardList className="text-xl text-gray-500" />
                <h3 className="text-gray-500 mr-2">دسته بندی ها</h3>
            </div>
            {
                cats ?
                    <>
                        {
                            cats.map(cat => (
                                <div key={cat.id} className="text-gray-500">
                                    <Link href={`/search/${cat.nameEn}`} className="text-sm flex items-center">
                                        <GoDotFill className="text-blue-500 ml-1" />
                                        <span>{cat.nameFa}</span>
                                    </Link>
                                    <ul className="text-xs mt-2 font-normal font-vazir mr-4 text-gray-400">
                                        {
                                            cat.childs.map(child => (
                                                <li key={child.id} className="py-1 flex items-center">
                                                    <GoDot className="text-blue-500 ml-1" />
                                                    <Link href={`/search/${child.nameEn}`}>{child.nameFa}</Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </>
                    :
                    <Skeleton height={135} />
            }
        </div>
    )

}

export default Categories;