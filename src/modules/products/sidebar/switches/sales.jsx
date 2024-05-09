"use client"

import { Switch } from "@headlessui/react"
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from 'next/navigation';

const SalesFilter = () => {
    const router = useRouter()
    const searchParams = useSearchParams();

    const [enabled, setEnabled] = useState(false);

    const params = Object.fromEntries(searchParams);

    useEffect(() => {
        setEnabled(searchParams.has('hotsale'));
        //eslint-disable-next-line
    }, []);

    const handleOnChange = () => {
        let query = { ...params };
        setEnabled(prev => !prev);
        if (!enabled) {
            query.hotsale = 1;
        } else {
            delete query.hotsale;
        }

        let queryString = JSON.stringify(query).replace(/}/g, '').replace(/{/g, '').replace(/,/g, '&').replace(/:/g, '=').replace(/"/g, '');
        router.push(`?${queryString}`)
    }

    return (
        <div className="flex items-center justify-between mt-6">
            <div className="text-gray-600">فقط محصولات حراج شده</div>
            <Switch
                checked={searchParams.has('hotsale') || enabled}
                onChange={handleOnChange}
                className={`${enabled ? 'bg-pink-500' : 'bg-gray-200'
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

export default SalesFilter;