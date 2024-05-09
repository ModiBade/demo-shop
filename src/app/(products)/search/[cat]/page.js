import List from "@/components/products/list";
import { BaseConfig } from "@/lib/config/base";
import Ask from "@/lib/fetch/fetch";
import ProductsHeader from "@/modules/products/header/header";
import Pagination from "@/modules/products/pagination/pagination";
import ProductsSidebar from "@/modules/products/sidebar/sidebar";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const getData = async (cat, limit, offset, order, hotsale, inStock) => {
  const data = await Ask(
    `${BaseConfig.apiUrl}/products/category/${cat}/${limit}/${offset}/${order}/${hotsale}/${inStock}`,
    "get",
    "no-store"
  );
  return data;
};

const Page = async ({ params, searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const limit = parseInt(searchParams.limit) || 9;
  const offset = (page - 1) * limit;
  const order = searchParams.order || "new";
  const hotsale = searchParams.hotsale || 0;
  const inStock = searchParams.inStock || 0;
  const data = await getData(
    params.cat,
    limit,
    offset,
    order,
    hotsale,
    inStock
  );

  let filteredData = data.products;
  if (searchParams.price) {
    let prices = searchParams.price.split("-");
    filteredData = filteredData.filter(
      (product) => product.price >= prices[0] && product.price <= prices[1]
    );
  }

  const pageNums = Math.ceil(data.count / limit);

  return (
    <div className="container mx-auto my-10">
      <div className="row md:!flex-nowrap md:!flex-row">
        <div className="col-12 md:col-4 lg:col-3 sm:pl-2">
          <ProductsSidebar
            maxPrice={data.price.max}
            minPrice={data.price.min}
          />
        </div>
        <div className="col-12 md:col-8 lg:col-9 my-5 sm:pr-2">
          <ProductsHeader />
          <React.Suspense
            fallback={
              <>
                <div className="row">
                  <div className="col-12 lg:col-4 mt-5 lg:px-4">
                    <Skeleton height={500} />
                  </div>
                </div>
              </>
            }
          >
            <List data={filteredData} limit={searchParams.limit} />
            {limit <= data.count && data.products.length > 0 && (
              <Pagination nums={pageNums} />
            )}
          </React.Suspense>
        </div>
      </div>
    </div>
  );
};

export default Page;
