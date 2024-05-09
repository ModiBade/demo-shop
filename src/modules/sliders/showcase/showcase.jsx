"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import Image from 'next/image';
import SwiperCore from 'swiper';
import { Autoplay } from "swiper/modules";
import { BaseConfig } from '@/lib/config/base';

const ShowcaseSlider = ({ data }) => {

    SwiperCore.use([Autoplay]);

    return (
        <Swiper
            className="rounded-2xl shadow-lg"
            modules={[Pagination, Navigation, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{
                "delay": 3000,
                "disableOnInteraction": false
            }}
        >
            {
                data.map(data => (
                    <SwiperSlide key={data.id}>
                        <Image src={`${BaseConfig.baseUrl}/media/images/sliders/${data.image}`} width={1600} height={40} alt={data.title} priority />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )

}

export default ShowcaseSlider;