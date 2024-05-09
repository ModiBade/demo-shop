"use client"

import { numberFormat } from '@/lib/tools/utils';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useRouter, useSearchParams } from 'next/navigation';

const PriceRange = ({ max, min }) => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const [value, setValue] = useState([min, max]);

    const params = Object.fromEntries(searchParams);

    useEffect(() => {
        setValue([min, max]);
    }, [min, max])

    const handleOnChangeComplete = (e) => {
        let query = { ...params };
        query.price = `${e[0]}-${e[1]}`;

        let queryString = JSON.stringify(query).replace(/}/g, '').replace(/{/g, '').replace(/,/g, '&').replace(/:/g, '=').replace(/"/g, '');
        router.push(`?${queryString}`)
    }

    return (
        <div>
            <div className="flex mb-4">
                <FaMoneyBillTransfer className="text-xl text-gray-500" />
                <h3 className="text-gray-500 mr-2">محدوده قیمت مورد نظر</h3>
            </div>
            <Slider
                className="dual-range-slider"
                range
                allowCross={false}
                min={min}
                max={max}
                value={value}
                step={100000}
                onChange={e => setValue(e)}
                onChangeComplete={handleOnChangeComplete}
            />
            <div className="flex items-center justify-between mt-4">
                <div className="flex bg-green-100 text-emerald-500 px-3 py-1 rounded-lg">
                    <span className="ml-2">{numberFormat(value[1])}</span>
                    <Image
                        src="/media/icons/svg/toman.svg"
                        width={18}
                        height={18}
                        alt="toman"
                    />
                </div>
                <div className="flex items-center bg-green-100 text-emerald-500 px-3 py-1 rounded-lg">
                    <span className="ml-2">{numberFormat(value[0])}</span>
                    <Image
                        src="/media/icons/svg/toman.svg"
                        width={18}
                        height={18}
                        alt="toman"
                    />
                </div>
            </div>
        </div>
    )

}

export default PriceRange;