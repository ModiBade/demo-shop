"use client";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Copyright = () => {
  const general = useSelector((state) => state.settings.general);

  return (
    <div className="bg-slate-100 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {general ? (
          <p className="font-vazir font-normal text-xs">{general.copyright}</p>
        ) : (
          <Skeleton height={5} width={250} />
        )}
        <div className="text-xs">طراحی و توسعه با ❤️ توسط محسن رحیم پور</div>
      </div>
    </div>
  );
};

export default Copyright;
