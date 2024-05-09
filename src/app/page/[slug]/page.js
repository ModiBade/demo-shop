import { BaseConfig } from "@/lib/config/base";
import Ask from "@/lib/fetch/fetch";
import BreadCrumbs from "@/ui/breadcrumbs/breadcrumbs";
import PageCard from "@/ui/cards/page/page";
import Faqs from "@/ui/faq/faq";

const getData = async (params) => {
  const data = await Ask(
    `${BaseConfig.apiUrl}/official/page/${params.slug}`,
    "get",
    "no-store"
  );
  return data;
};

const About = async ({ params }) => {
  const data = await getData(params);

  return (
    <>
      <BreadCrumbs items={[{ name: data.name, active: true }]} />
      <PageCard title={data.name} subtitle={data.subtitle}>
        <p
          className="font-iran font-normal text-justify leading-8"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
        {params.slug === "faq" && <Faqs data={data.questions} />}
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
};

export default About;
