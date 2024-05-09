"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";


const Pagination = ({ nums }) => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const params = Object.fromEntries(searchParams);

    const handleOnClick = page => {
        let query = { ...params };
        query.page = page;

        let queryString = JSON.stringify(query).replace(/}/g, '').replace(/{/g, '').replace(/,/g, '&').replace(/:/g, '=').replace(/"/g, '');
        router.push(`?${queryString}`)
    }

    const renderPages = () => {
        let current = parseInt(params.page) || 1;
        const pages = [];
        const pageLimit = 2;
        const pageNeighbours = Math.floor(pageLimit / 2);
        let startPage = Math.max(1, current - pageNeighbours);
        let endPage = Math.min(nums, current + pageNeighbours);

        if (nums <= pageLimit) {
            startPage = 1;
            endPage = nums;
        } else {
            if (current - pageNeighbours <= 0) {
                endPage = pageLimit;
            }
            if (current + pageNeighbours >= nums) {
                startPage = nums - pageLimit + 1;
            }
        }

        if (startPage > 1) {
            pages.push(
                <button onClick={() => handleOnClick(1)} key={1} className={`page ${current === 1 && `active`}`}>1</button>
            )
            pages.push(
                <div className="px-4 text-violet-600">...</div>
            )
        }

        for (let index = startPage; index <= endPage; index++) {
            pages.push(
                <button onClick={() => handleOnClick(index)} key={index} className={`page ${current === index && `active`}`}>{index}</button>
            )
        }

        if (nums > endPage) {
            pages.push(
                <div className="px-4 text-violet-600">...</div>
            )
            pages.push(
                <button onClick={() => handleOnClick(nums)} key={nums} className={`page ${current === nums && `active`}`}>{nums}</button>
            )
        }
        return pages;
    }

    return (
        <div className="flex items-center justify-between mt-10 px-5">
            <button disabled={parseInt(params.page) <= 1} onClick={() => handleOnClick(parseInt(params.page) - 1)} className="flex font-normal text-violet-600 disabled:text-gray-500">
                <MdKeyboardArrowRight className="text-2xl" />
                <span className="text-lg">قبلی</span>
            </button>
            <div className="pagination">
                {renderPages()}
            </div>
            <button disabled={parseInt(params.page) >= nums} onClick={() => handleOnClick(parseInt(params.page) + 1)} className="flex font-normal text-violet-600 disabled:text-gray-500">
                <span className="text-lg">بعدی</span>
                <MdKeyboardArrowLeft className="text-2xl" />
            </button>
        </div>
    )

}

export default Pagination;