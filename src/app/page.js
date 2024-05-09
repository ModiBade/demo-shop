import { BaseConfig } from "@/lib/config/base";
import Ask from "@/lib/fetch/fetch";
import ProductsSlider from "@/modules/sliders/products/products";
import ShowcaseSlider from "@/modules/sliders/showcase/showcase";
import Image from "next/image";
import Link from "next/link";

export default async function Landing() {
  const data = await Ask(`${BaseConfig.apiUrl}/landing`, "get", "no-store");
  return (
    <div className="container mx-auto mb-10">
      <div className="mb-5">
        <ShowcaseSlider data={data.sliders} />
      </div>
      <div className="row sm:!flex-row">
        {data.productsSlider.map((slider, index) => {
          if (index === 0 || index === 1) {
            if (slider.style === "1x2") {
              return (
                <div key={slider.id} className="sm:col-6 col-12 px-2">
                  <ProductsSlider
                    products={slider.products}
                    title={slider.title}
                    subtitle={slider.subtitle}
                    delay={slider.delay}
                  />
                </div>
              );
            } else {
              return (
                <div key={slider.id} className="col-12">
                  <ProductsSlider
                    products={slider.products}
                    title={slider.title}
                    subtitle={slider.subtitle}
                    delay={slider.delay}
                  />
                </div>
              );
            }
          }
          return null;
        })}
      </div>
      <div className="row !flex-row mt-2">
        {data.adCards.map((card) => (
          <div
            key={card.id}
            className="lg:col-2 md:col-4 col-6 lg:px-1 md:px-1 pr-1 mt-3"
          >
            <Link href={card.link}>
              <Image
                className="rounded-2xl shadow-md"
                src={`${BaseConfig.baseUrl}/media/images/ads/${card.avatar}`}
                width={450}
                height={40}
                alt="logo"
                loading="lazy"
              />
            </Link>
          </div>
        ))}
      </div>
      <div className="row">
        {data.productsSlider.map((slider, index) => {
          if (index !== 0 && index !== 1) {
            if (slider.style === "1x2") {
              return (
                <div key={slider.id} className="sm:col-6 col-12 px-2">
                  <ProductsSlider
                    products={slider.products}
                    title={slider.title}
                    subtitle={slider.subtitle}
                    delay={slider.delay}
                  />
                </div>
              );
            } else {
              return (
                <div key={slider.id} className="col-12">
                  <ProductsSlider
                    products={slider.products}
                    title={slider.title}
                    subtitle={slider.subtitle}
                    delay={slider.delay}
                  />
                </div>
              );
            }
          }
          return null;
        })}
      </div>
    </div>
  );
}
