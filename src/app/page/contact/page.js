import { BaseConfig } from "@/lib/config/base";
import Ask from "@/lib/fetch/fetch";
import Address from "@/ui/cards/page/contact/address";
import Email from "@/ui/cards/page/contact/email";
import WorkingHours from "@/ui/cards/page/contact/hours";
import Phone from "@/ui/cards/page/contact/phone";
import BreadCrumbs from "@/ui/breadcrumbs/breadcrumbs";
import PageCard from "@/ui/cards/page/page";
import Image from "next/image";

const getData = async () => {
  const data = await Ask(
    `${BaseConfig.apiUrl}/official/page/contact`,
    "get",
    "no-store"
  );
  return data;
};

const Contact = async () => {
  const data = await getData();

  return (
    <>
      <BreadCrumbs items={[{ name: data.name, active: true }]} />
      <PageCard title={data.name} subtitle={data.subtitle}>
        <div className="flex items-center justify-between">
          <Address />
          <Phone />
          <Email />
          <WorkingHours />
        </div>
        <div className="flex items-center justify-between flex-wrap lg:flex-nowrap px-10 mt-5">
          <Image
            src="/media/images/contact-us.jpg"
            width={600}
            height={600}
            alt="contact"
          />
          <div className="mr-5">
            <p
              className="font-iran font-normal text-justify leading-8"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
            <form className="mt-5">
              <div className="flex items-center justify-between">
                <div className="w-[49%]">
                  <label className="text-gray-600 text-2xl font-normal">
                    موضوع
                  </label>
                  <input className="bg-slate-100 focus:outline-0 font-iran font-normal px-3 py-2 rounded-xl w-full mt-3" />
                </div>
                <div className="w-[50%]">
                  <label className="text-gray-600 text-2xl font-normal">
                    ایمیل
                  </label>
                  <input className="bg-slate-100 focus:outline-0 font-iran font-normal px-3 py-2 rounded-xl w-full mt-3" />
                </div>
              </div>
              <div className="mt-5">
                <label className="text-gray-600 text-2xl font-normal">
                  متن
                </label>
                <textarea className="w-full bg-slate-100 focus:outline-0 font-iran font-normal px-3 py-2 rounded-xl w-full mt-3" />
              </div>
              <button className="float-left transition bg-green-100 hover:bg-emerald-500 text-emerald-500 hover:text-white px-4 py-1 rounded-xl mt-5">
                ارسال
              </button>
            </form>
          </div>
        </div>
      </PageCard>
    </>
  );
};

export const generateMetadata = async ({ params }) => {
  const data = await getData(params);
  let meta = {
    title: `${BaseConfig.appName} | ${data.name}`,
  };

  return meta;

  return meta;
};

export default Contact;
