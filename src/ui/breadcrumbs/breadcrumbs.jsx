import Link from "next/link";
import { RiHome3Line } from "react-icons/ri";

const BreadCrumbs = ({ items }) => {

    return (
        <div className="mb-10">
            <ul className="flex">
                <li>
                    <Link href="/">
                        <RiHome3Line className="text-xl" />
                    </Link>
                </li>
                {
                    items.map((item, index) => (
                        <li key={index} className={`list-outside list-disc mr-7 ${item.active ? `text-blue-500` : `text-gray-600`}`}>
                            {
                                item.link ?
                                    <Link href={item.link}>{item.name}</Link>
                                    :
                                    item.name
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    )

}

export default BreadCrumbs;