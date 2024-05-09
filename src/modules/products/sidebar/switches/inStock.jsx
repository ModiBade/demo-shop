"use client"

import { Switch } from "@headlessui/react"
import { useState } from "react";
import { useRouter, useSearchParams } from 'next/navigation';

const InStockFilter = () => {
    const router = useRouter()
    const searchParams = useSearchParams();

    const [enabled, setEnabled] = useState(searchParams.has('inStock'));

    const params = Object.fromEntries(searchParams);

    const handleOnChange = () => {
        let query = { ...params };
        setEnabled(prev => !prev);
        if (!enabled) {
            query.inStock = 1;
        } else {
            delete query.inStock;
        }

        let queryString = JSON.stringify(query).replace(/}/g, '').replace(/{/g, '').replace(/,/g, '&').replace(/:/g, '=').replace(/"/g, '');
        router.push(`?${queryString}`)
    }

    return (
        <div className="flex items-center justify-between">
            <div className="text-gray-600">فقط محصولات موجود</div>
            <Switch
                checked={enabled}
                onChange={handleOnChange}
                className={`${enabled ? 'bg-violet-500' : 'bg-gray-200'
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
                <span className="sr-only">Enable notifications</span>
                <span
                    className={`${enabled ? 'translate-x-[-.25rem]' : 'translate-x-[-1.50rem]'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
            </Switch>
        </div>
    )

}

export default InStockFilter;