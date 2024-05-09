import AddProductToBasket from "@/modules/products/basket/basket";
import ProductsCompare from "@/modules/products/compare/compare";
import AddProductToWishlist from "@/modules/products/wishlist/wishlist";
import ProductsSlider from "@/modules/sliders/products/products";
import Image from "next/image";
import { MdDeliveryDining } from "react-icons/md";
import { LuShieldCheck } from "react-icons/lu";
import ProductGallery from "@/modules/products/gallery/gallery";
import ProductInfoBar from "@/modules/products/infoBar/infoBar";
import ProductAttributes from "@/modules/products/attributes/attributes";
import ProductTabs from "@/modules/products/tabs/tabs";
import Ask from "@/lib/fetch/fetch";
import { BaseConfig } from "@/lib/config/base";

const getData = async (params) => {
  const data = await Ask(
    `${BaseConfig.apiUrl}/products/index/${params.slug}`,
    "get",
    "no-store"
  );
  return data;
};

const ProductDetails = async ({ params }) => {
  const data = await getData(params);

  return (
    <>
      <div className="container mx-auto bg-white my-5 rounded-2xl">
        <div className="row">
          <div className="relative col-12 md:col-6 lg:col-3 xl:col-3 border-l border-dashed">
            <div className="absolute px-3">
              <ProductsCompare />
              <AddProductToWishlist />
            </div>
            <ProductGallery
              alt={data.product.nameEn}
              avatar={`${
                BaseConfig.baseUrl
              }/media/images/products/${data.product.avatar.replace(
                "*",
                "250"
              )}`}
              gallery={data.product.gallery}
            />
          </div>
          <div className="col-12 md:col-6 lg:col-5 xl:col-6">
            <div className="p-4">
              <div>
                <Image
                  src={`${
                    BaseConfig.baseUrl
                  }/media/images/brands/${data.product.brand.avatar.replace(
                    "*",
                    "75"
                  )}`}
                  width={50}
                  height={50}
                  alt={data.product.brand.nameEn}
                  loading="lazy"
                />
              </div>
              <div className="mt-5">
                <h2 className="font-bakh font-normal mt-3 text-gray-600 text-xl">
                  {data.product.nameFa}
                </h2>
                <h4 className="font-[calibri] text-slate-400 tracking-wide text-lg">
                  {data.product.nameEn}
                </h4>
              </div>
              <hr className="border-dashed my-5" />
              <ProductInfoBar
                unique={data.product.unique}
                category={data.product.category}
              />
              <ProductAttributes data={data.product.subAttributes} />
            </div>
          </div>
          <div className="col-12 lg:col-4 xl:col-3 border-r border-dashed">
            <div className="group relative">
              <AddProductToBasket
                type="full"
                price={data.product.price}
                discount={data.product.discountPercent}
                discountPrice={data.product.discountPrice}
                quantity={data.product.quantity}
              />
              <div className="flex items-center justify-between py-3 px-6">
                <div className="flex items-center bg-violet-100 text-violet-600 text-xs px-3 py-1 rounded-lg">
                  <LuShieldCheck className="text-lg" />
                  <span className="mr-1">ضمانت اصالت و گارانتی کالا</span>
                </div>
                <div className="flex items-center bg-green-100 text-emerald-600 text-xs px-3 py-1 rounded-lg">
                  <MdDeliveryDining className="text-lg" />
                  <span className="mr-1">ارسال رایگان</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-dashed" />
        <div className="p-5">
          <ProductTabs
            data={{
              description: data.product.description,
              attributes: data.product.mainAttributes,
            }}
          />
        </div>
      </div>
      {data.familiar.length > 0 && (
        <div className="container mx-auto mb-10">
          <div className="row">
            <div className="col-12">
              <ProductsSlider
                products={data.familiar}
                title="کالا های مشابه"
                subtitle="سایر محصولات مرتبط"
                color="primary"
                delay={2000}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;

export const generateMetadata = async ({ params }) => {
  const data = await getData(params);
  let meta = {
    title: `${BaseConfig.appName} | ${data.product.nameFa}`,
    description: data.product.metaDescription,
    keywords: data.product.keywords,
  };

  if (data.product.canonical)
    meta.alternates = {
      canonical: data.product.canonical,
    };

  return meta;
};
