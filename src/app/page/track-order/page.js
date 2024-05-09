import { BaseConfig } from "@/lib/config/base";
import Ask from "@/lib/fetch/fetch";
import BreadCrumbs from "@/ui/breadcrumbs/breadcrumbs";
import PageCard from "@/ui/cards/page/page";
import Image from "next/image";

const getData = async () => {
  const data = await Ask(
    `${BaseConfig.apiUrl}/official/page/track-order`,
    "get",
    "no-store"
  );
  return data;
};

const TrackOrder = async () => {
  const data = await getData();

  return (
    <>
      <BreadCrumbs items={[{ name: data.name, active: true }]} />
      <PageCard title={data.name} subtitle={data.subtitle}>
        <div className="flex items-center justify-between flex-wrap lg:flex-nowrap px-10">
          <Image
            src="/media/images/tracking-order.jpg"
            width={600}
            height={600}
            alt="track"
          />
          <div className="mr-5 leading-8">
            <p
              className="font-iran font-normal text-justify"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
            <div className="mt-5">
              <label className="text-gray-600 text-2xl font-normal">
                شماره سفارش
              </label>
              <input className="bg-slate-100 focus:outline-0 font-iran font-normal px-3 py-2 rounded-xl w-full mt-3" />
              <button className="float-left transition bg-green-100 hover:bg-emerald-500 text-emerald-500 hover:text-white px-4 py-1 rounded-xl mt-5">
                پیگیری سفارش
              </button>
            </div>
          </div>
        </div>
      </PageCard>
    </>
  );
};

export const generateMetadata = async () => {
  const data = await getData();
  let meta = {
    title: `${BaseConfig.appName} | ${data.name}`,
  };

  return meta;
};

export default TrackOrder;
