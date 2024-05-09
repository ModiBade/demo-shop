import DisplayQuantity from "./filters/displayQuantity";
import GeneralFilter from "./filters/generalFilter";

const ProductsHeader = () => {
    return (
        <div>
            <h2 className="text-xl text-gray-700">لیست محصولات</h2>
            <div className="flex items-center justify-between flex-wrap border-b mt-2">
                <GeneralFilter />
                <DisplayQuantity />
            </div>
        </div>
    )
}

export default ProductsHeader;