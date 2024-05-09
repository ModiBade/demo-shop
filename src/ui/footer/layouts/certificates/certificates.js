"use client";

import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useSelector } from "react-redux";

const Certificates = () => {
  const general = useSelector((state) => state.settings.general);

  return (
    <div className="container mx-auto flex justify-between items-center flex-wrap py-8 px-8">
      <div className="flex flex-col">
        {general ? (
          <p className="font-vazir font-normal text-sm text-gray-600">
            پاسخگوی مشتریان عزیز هستیم از {general.working_hours}
          </p>
        ) : (
          <Skeleton height={5} width={250} />
        )}
        <p className="mt-3 text-gray-800">
          شماره تماس پشتیبانی{" "}
          {general ? (
            <span className="text-blue-500 text-xl mr-3">
              {general.call_center}
            </span>
          ) : (
            <Skeleton height={5} width={100} className="mr-5" />
          )}
        </p>
      </div>
      <div>
        <Image
          loading="lazy"
          src="/media/images/enamad.png"
          width={110}
          height={40}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Certificates;
