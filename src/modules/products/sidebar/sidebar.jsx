import { MdOutlineFilterVintage } from "react-icons/md";
import Categories from "./categories/categories";
import ColorsFilter from "./properties/colors";
import SizesFilter from "./properties/sizes";
import PriceRange from "./priceRange/priceRange";
import InStockFilter from "./switches/inStock";
import SalesFilter from "./switches/sales";

const ProductsSidebar = ({ maxPrice, minPrice }) => {

    return (
        <div className="bg-white rounded-2xl p-5">
            <div className="flex items-center">
                <MdOutlineFilterVintage className="text-3xl text-blue-500" />
                <div className="mr-2">
                    <h3 className="text-blue-500 text-xl">فیلتر محصولات</h3>
                    <div className="text-xs font-iran font-normal text-slate-500">فیلتر نتایج جستجو</div>
                </div>
            </div>
            <hr className="my-3 border-dashed" />
            <Categories />
            <hr className="my-3 border-dashed" />
            <ColorsFilter />
            <hr className="my-3 border-dashed" />
            <SizesFilter />
            <hr className="my-3 border-dashed" />
            <PriceRange max={maxPrice} min={minPrice} />
            <hr className="my-3 border-dashed" />
            <InStockFilter />
            <SalesFilter />
        </div>
    )

}

export default ProductsSidebar;