import ProductMini from "@/ui/cards/product/mini";

const List = ({ data }) => {

    return (
        <>
            <div className="row">
                {
                    data && <>
                        {
                            data.map(product => (
                                <div key={product.id} className="col-12 lg:col-4 mt-5 lg:px-4">
                                    <ProductMini
                                        data={product}
                                    />
                                </div>
                            ))
                        }
                    </>
                }
                {
                    data.length === 0 &&
                    <div className="mt-[5em] text-center w-full font-normal text-4xl text-gray-700">متاسفیم محصولی یافت نشد :(</div>
                }
            </div>

        </>
    )
}

export default List;