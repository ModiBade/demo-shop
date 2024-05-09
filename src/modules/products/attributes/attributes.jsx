"use client"

import { useState } from "react";

const ProductAttributes = ({ data }) => {

    const [showMore, setShowMore] = useState(false);

    let attributes = showMore ? data : data.slice(0, 4);

    return (
        <div className="mt-10">
            <h6 className="text-blue-600">ویژگی های محصول</h6>
            <ul className="text-gray-500 font-iran font-normal text-xs list-disc list-inside mt-3 leading-7	">
                {
                    attributes.map(data => (
                        <li key={data.id}>{data.attribute}</li>
                    ))
                }
            </ul>
            <button onClick={() => setShowMore(prev => !prev)} className="mt-2 text-xs text-blue-500">نمایش {showMore ? `کمتر` : `بیشتر`}</button>
        </div>
    )

}

export default ProductAttributes;