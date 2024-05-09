import { BaseConfig } from "@/lib/config/base";
import { FaRegUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { SlBasketLoaded } from "react-icons/sl";
import { MdComment } from "react-icons/md";
import { LiaReplySolid } from "react-icons/lia";

const ProductComments = () => {

    return (
        <>
            <div className="flex items-center justify-between mx-auto">
                <div className="font-normal">
                    <h2 className="text-2xl text-blue-500">نظرتو بگو</h2>
                    <span className="font-iran text-xs">لطفا نظرت راجب محصولی که خریدی بگو</span>
                </div>
                <button className="flex transition bg-green-100 text-green-500 hover:bg-emerald-400 hover:text-white px-5 py-2 rounded-lg text-sm">
                    <MdComment className="ml-2 text-lg" />
                    <span>ثبت نظر</span>
                </button>
            </div>
            <div className="flex flex-col mx-auto">
                <div className="my-5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <FaRegUser className="text-3xl text-gray-600" />
                            <div className="flex items-center font-iran mr-3 text-gray-600">
                                <div className="ml-5">
                                    <div className="text-sm">محسن رحیم پور</div>
                                    <div className="text-xs font-normal">خریدار</div>
                                </div>
                                <div className="font-iran font-normal italic text-xs">دیدگاه شما پس از تایید مدیریت منتشر خواهد شد</div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col items-center">
                                <FaStar className="text-orange-400" />
                                <span>9.3</span>
                            </div>
                            <div className="text-gray-500 text-xs">1402/02/24 @ 14:56</div>
                        </div>
                    </div>
                    <div className="p-5 mt-3 rounded-xl border border-dashed">
                        <div className="text-sm font-iran text-gray-600 font-normal">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</div>
                        <hr className="border-dashed my-5" />
                        <div className="group mt-5 bg-slate-50 p-5 rounded-xl">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <SlBasketLoaded className="text-3xl text-gray-600" />
                                    <div className="font-iran mr-3 text-gray-600">
                                        <div className="text-sm">{BaseConfig.shortName}</div>
                                        <div className="text-xs font-normal">فروشگاه</div>
                                    </div>
                                    <button className="mr-3 flex items-center transition-opacity ease-out opacity-0 group-hover:opacity-100">
                                        <LiaReplySolid className="ml-1" />
                                        <span className="text-gray-600 text-sm">پاسخ</span>
                                    </button>
                                </div>
                                <div className="text-gray-500 text-xs">1402/02/24 @ 14:56</div>
                            </div>
                            <div className="p-5 mt-3 rounded-xl border">
                                <div className="text-sm font-iran text-gray-600 font-normal">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ProductComments;