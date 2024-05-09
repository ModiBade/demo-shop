import { FaShieldHeart } from "react-icons/fa6";
import { GiDeliveryDrone } from "react-icons/gi";
import { PiMedalFill } from "react-icons/pi";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const Atrributes = () => {
  return (
    <div className="container mx-auto py-9 flex justify-around items-center sm:flex-row flex-wrap">
      <div className="flex flex-col items-center">
        <PiMedalFill className="text-4xl text-blue-500" />
        <span className="text-1xl text-emerald-500 mt-4">تضمین اصالت کالا</span>
        <div className="font-vazir font-normal text-slate-500 text-xs">
          ضمانت اصالت و گارانتی کالا
        </div>
      </div>
      <div className="flex flex-col items-center">
        <GiDeliveryDrone className="text-4xl text-blue-500" />
        <span className="text-1xl text-emerald-500 mt-4">تحویل اکسپرس</span>
        <div className="font-vazir font-normal text-slate-500 text-xs">
          سریع ترین زمان ممکن در تهران
        </div>
      </div>
      <div className="flex flex-col items-center ss:mt-0 mt-4">
        <TfiHeadphoneAlt className="text-4xl text-blue-500" />
        <span className="text-1xl text-emerald-500 mt-4">پشتیبانی آنلاین</span>
        <div className="font-vazir font-normal text-slate-500 text-xs">
          سامانه آنلاین ثبت تیکت
        </div>
      </div>
      <div className="flex flex-col items-center sm:mt-0 mt-4">
        <FaShieldHeart className="text-4xl text-blue-500" />
        <span className="text-1xl text-emerald-500 mt-4">پرداخت امن</span>
        <div className="font-vazir font-normal text-slate-500 text-xs">
          درگاه پرداخت ایمن
        </div>
      </div>
    </div>
  );
};

export default Atrributes;
