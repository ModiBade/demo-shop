"use client"

import ProductMini from "@/ui/cards/product/mini";
import { GiBasket } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import NextButton from "./tools/nextButton";
import PrevButton from "./tools/prevButton";
import SwiperCore from 'swiper';
import { Autoplay } from "swiper/modules";

import 'swiper/css';

const ProductsSlider = ({ products, title, subtitle, delay }) => {

    SwiperCore.use([Autoplay]);

    return (
        <div className="bg-white mt-5 rounded-2xl p-5">
            <Swiper
                className="!pt-8"
                spaceBetween={30}
                slidesPerView={'auto'}
                autoplay={{
                    "delay": delay,
                    "pauseOnMouseEnter": true,
                }}
            >
                {
                    products.map(data => (
                        <SwiperSlide key={data.id} className="py-4 px-2 !w-[18em]">
                            <ProductMini data={data} />
                        </SwiperSlide>
                    ))
                }
                <div className="absolute flex items-center justify-between left-0 top-[-10px] w-full mt-2">
                    <div className="flex items-center">
                        <GiBasket className={`text-3xl`} />
                        <div className="mr-2">
                            <h3>{title}</h3>
                            <p className="font-iran font-normal text-[11px] text-slate-500">{subtitle}</p>
                        </div>
                    </div>
                    <div>
                        <NextButton />
                        <PrevButton />
                    </div>
                </div>
            </Swiper>
        </div>
    )

}

export default ProductsSlider;