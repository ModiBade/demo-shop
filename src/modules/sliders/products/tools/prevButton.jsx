import { IoIosArrowBack } from "react-icons/io";
import { useSwiper } from "swiper/react";

const PrevButton = () => {

    const swiper = useSwiper();

    return <button className={`mr-4 text-2xl`} onClick={() => swiper.slidePrev()}><IoIosArrowBack /></button>

}

export default PrevButton;