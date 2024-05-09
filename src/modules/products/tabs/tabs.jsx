"use client"

import { Tab } from "@headlessui/react"
import ProductDescription from "./description/description"
import ProductTechnicalAttributes from "./technical/technical"
import ProductComments from "./comments/comments"

const ProductTabs = ({ data }) => {

    return (
        <Tab.Group>
            <Tab.List className="border-b border-gray-100">
                <Tab as="span">
                    {({ selected }) => (
                        <button
                            className={`transition ${selected
                                ? `bg-green-100 text-emerald-500`
                                : `bg-slate-100 text-slate-500`
                                } px-4 py-1 text-sm ml-2 rounded-t-lg focus:outline-0 mt-1`}
                        >
                            توضیحات محصول
                        </button>
                    )}
                </Tab>
                <Tab as="span">
                    {({ selected }) => (
                        <button
                            className={`transition ${selected
                                ? `bg-green-100 text-emerald-500`
                                : `bg-slate-100 text-slate-500`
                                } px-4 py-1 text-sm ml-2 rounded-t-lg focus:outline-0 mt-1`}
                        >
                            مشخصات فنی
                        </button>
                    )}
                </Tab>
                <Tab as="span">
                    {({ selected }) => (
                        <button
                            className={`transition ${selected
                                ? `bg-green-100 text-emerald-500`
                                : `bg-slate-100 text-slate-500`
                                } px-4 py-1 text-sm ml-2 rounded-t-lg focus:outline-0 mt-1`}
                        >
                            نظرات خریداران
                        </button>
                    )}
                </Tab>
            </Tab.List>
            <Tab.Panels className="mt-5">
                <Tab.Panel>
                    <ProductDescription description={data.description} />
                </Tab.Panel>
                <Tab.Panel>
                    <ProductTechnicalAttributes attributes={data.attributes} />
                </Tab.Panel>
                <Tab.Panel>
                    <ProductComments />
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    )

}

export default ProductTabs