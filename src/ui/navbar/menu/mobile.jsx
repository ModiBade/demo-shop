import { BaseConfig } from "@/lib/config/base";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector } from "react-redux";

const MobileMenu = ({ callback }) => {

    const cats = useSelector(state => state.settings.categories);

    return (
        <div className="px-5">
            <Menu as="div" className="relative mb-4">
                <Menu.Button className="flex items-center justify-between w-full text-blue-500 text-lg ">
                    <span className="font-normal">دسته بندی محصولات</span>
                    <IoIosArrowDown />
                </Menu.Button>
                <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="relative bg-slate-100 p-3 mt-1 rounded-xl">
                        {
                            cats.map(cat => (
                                <Menu key={cat.id} as="div" className="relative">
                                    <Menu.Button className="w-full">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600">{cat.nameFa}</span>
                                            <IoIosArrowDown />
                                        </div>
                                    </Menu.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="relative bg-slate-150">
                                            {
                                                cat.childs.map(child => (
                                                    <Menu.Item key={child.id}>
                                                        <Link onClick={callback} className="flex items-center mt-3" href={`/search/${child.nameEn}`}>
                                                            <Image
                                                                src={`${BaseConfig.baseUrl}/media/images/brands/${child.avatar.replace("*", "30")}`}
                                                                width={25}
                                                                height={25}
                                                                className="ml-2"
                                                                alt="brand"
                                                                loading="lazy"
                                                            />
                                                            <span className="text-gray-500 font-vazir text-xs">{child.nameFa}</span>
                                                        </Link>
                                                    </Menu.Item>
                                                ))
                                            }
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            ))
                        }
                    </Menu.Items>
                </Transition>
            </Menu>
            <Link onClick={callback} className="block text-xl font-normal text-gray-600 mb-4" href="/">ویترین</Link>
            <Link onClick={callback} className="block text-xl font-normal text-gray-600 mb-4" href="/search?order=seller">پرفروش ترین ها</Link>
            <Link onClick={callback} className="block text-xl font-normal text-gray-600 mb-4" href="/search?hotsale=1">پیشنهادات داغ</Link>
            <Link onClick={callback} className="block text-xl font-normal text-gray-600 mb-4" href="/page/faq">سوالات متداول</Link>
            <Link onClick={callback} className="block text-xl font-normal text-gray-600 mb-4" href="/blog">مجله</Link>
            <Link onClick={callback} className="block text-xl font-normal text-gray-600 mb-4" href="/page/about">درباره ما</Link>
            <Link onClick={callback} className="block text-xl font-normal text-gray-600 mb-4" href="/page/contact">تماس باما</Link>
        </div>
    )

}

export default MobileMenu;