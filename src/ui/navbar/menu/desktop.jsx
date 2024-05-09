"use client"

import { BaseConfig } from "@/lib/config/base";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { useSelector } from "react-redux";

const DesktopMenu = () => {

    const cats = useSelector(state => state.settings.categories) || [];

    return (
        <>
            <Menu as="div" className="relative ml-3">
                <Menu.Button className="flex items-center border-0 bg-blue-100 text-blue-700 px-3 py-2 rounded-t-lg">
                    <HiMenuAlt3 className="text-2xl" />
                    <span className="mr-2">دسته بندی محصولات</span>
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-10" />
                </Transition>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute flex justify-around right-0 z-10 mt-2 w-fit origin-top-right rounded-md bg-white py-2 shadow-md py-5 px-5 focus:outline-none">
                        {
                            cats.map(cat => (
                                <Menu.Item key={cat.id}>
                                    <div className="w-[14rem]">
                                        <Link href={`/search/${cat.nameEn}`} className="text-lg flex items-center">
                                            <span className="text-blue-500">{cat.nameFa}</span>
                                        </Link>
                                        <ul className="text-xs mt-2 font-normal font-vazir text-gray-600">
                                            {
                                                cat.childs.map(child => (
                                                    <li key={child.id} className="py-2 flex items-center">
                                                        <Image
                                                            src={`${BaseConfig.baseUrl}/media/images/brands/${child.avatar.replace("*", "30")}`}
                                                            width={25}
                                                            height={25}
                                                            className="ml-2"
                                                            alt="brand"
                                                            loading="lazy"
                                                        />
                                                        <Link href={`/search/${child.nameEn}`}>{child.nameFa}</Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </Menu.Item>
                            ))
                        }
                    </Menu.Items>
                </Transition>
            </Menu>
            <Link
                href="/"
                className="ml-4 text-sm font-bold font-bakh text-gray-600 border-b-4 border-transparent transition hover:border-pink-500 hover:text-pink-500"
            >
                ویترین
            </Link>
            <Link
                href="/search?order=seller"
                className="ml-4 text-sm font-bold font-bakh text-gray-600 border-b-4 border-transparent transition hover:border-pink-500 hover:text-pink-500"
            >
                پرفروش ترین ها
            </Link>
            <a
                href="/search?hotsale=1"
                className="ml-4 text-sm font-bold font-bakh text-gray-600 border-b-4 border-transparent transition hover:border-pink-500 hover:text-pink-500"
            >
                پیشنهادات داغ
            </a>
            <Link
                href="/page/faq"
                className="ml-4 text-sm font-bold font-bakh text-gray-600 border-b-4 border-transparent transition hover:border-pink-500 hover:text-pink-500"
            >
                سوالات متداول
            </Link>
            <Link
                href="#"
                className="ml-4 text-sm font-bold font-bakh text-gray-600 border-b-4 border-transparent transition hover:border-pink-500 hover:text-pink-500"
            >
                مجله
            </Link>
            <Link
                href="/page/about"
                className="ml-4 text-sm font-bold font-bakh text-gray-600 border-b-4 border-transparent transition hover:border-pink-500 hover:text-pink-500"
            >
                درباره ما
            </Link>
        </>
    )

}

export default DesktopMenu;