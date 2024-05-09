"use client";

import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useSelector } from "react-redux";

const Main = () => {
  const general = useSelector((state) => state.settings.general);

  return (
    <div className="container mx-auto row py-8 px-8 sm:flex-row">
      <div className="md:col-3 sm:col-6 md:pl-5 mt-4">
        <div className="flex flex-col">
          <h2 className="text-1xl text-slate-500">درباره ما</h2>
          <Image
            loading="lazy"
            className="my-2"
            src="/media/images/logo.png"
            width={150}
            height={40}
            alt="logo"
          />
          {general ? (
            <p className="leading-6	text-xs font-vazir text-slate-500 font-normal text-justify mt-3">
              {general.about}
            </p>
          ) : (
            <Skeleton height={5} width={250} />
          )}
        </div>
      </div>
      <div className="md:col-3 sm:col-6 md:px-2 sm:pr-5 mt-4">
        <div className="flex flex-col">
          <h2 className="text-slate-500">راهنمای خرید</h2>
          <Link
            href="/page/submit-order"
            className="transition font-vazir font-normal text-xs text-slate-500 my-2 hover:text-emerald-500"
          >
            ثبت سفارش
          </Link>
          <Link
            href="/page/delivery"
            className="transition font-vazir font-normal text-xs text-slate-500 my-2 hover:text-emerald-500"
          >
            روند ارسال مرسوله ها
          </Link>
          <Link
            href="/page/track-order"
            className="transition font-vazir font-normal text-xs text-slate-500 my-2 hover:text-emerald-500"
          >
            پیگیری سفارش
          </Link>
          <Link
            href="/page/payment-guide"
            className="transition font-vazir font-normal text-xs text-slate-500 my-2 hover:text-emerald-500"
          >
            راهنمای پرداخت
          </Link>
        </div>
      </div>
      <div className="md:col-3 sm:col-6 md:px-2 mt-4">
        <div className="flex flex-col">
          <h2 className="text-slate-500">خدمات مشتریان</h2>
          <Link
            href="/page/faq"
            className="transition font-vazir font-normal text-xs text-slate-500 my-2 hover:text-emerald-500"
          >
            سوالات متداول
          </Link>
          <Link
            href="/page/return-goods"
            className="transition font-vazir font-normal text-xs text-slate-500 my-2 hover:text-emerald-500"
          >
            مرجوعی کالا
          </Link>
          <Link
            href="/page/terms"
            className="transition font-vazir font-normal text-xs text-slate-500 my-2 hover:text-emerald-500"
          >
            شرایط استفاده
          </Link>
          <Link
            href="/page/privacy"
            className="transition font-vazir font-normal text-xs text-slate-500 my-2 hover:text-emerald-500"
          >
            حریم خصوصی
          </Link>
        </div>
      </div>
      <div className="md:col-3 sm:col-6 md:pr-5 sm:pr-5 mt-4">
        <div className="flex flex-col">
          <h2 className="text-slate-500">فروشگاه</h2>
          <Link
            href="/page/about"
            className="transition font-vazir font-normal text-xs text-slate-500 my-2 hover:text-emerald-500"
          >
            درباره ما
          </Link>
          <Link
            href="/page/contact"
            className="transition font-vazir font-normal text-xs text-slate-500 my-2 hover:text-emerald-500"
          >
            تماس باما
          </Link>
          <Link
            href="/page/collaboration"
            className="transition font-vazir font-normal text-xs text-slate-500 my-2 hover:text-emerald-500"
          >
            همکاری باما
          </Link>
          <Link
            href="/page/blog"
            className="transition font-vazir font-normal text-xs text-slate-500 my-2 hover:text-emerald-500"
          >
            مجله
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
