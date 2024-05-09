import { BaseConfig } from "@/lib/config/base";
import Image from "next/image";

const ProductGallery = ({ alt, avatar, gallery }) => {

    return (
        <div className="flex flex-col items-center p-8">
            <div className="h-fit overflow-hidden">
                <Image
                    src={avatar}
                    width={300}
                    height={300}
                    alt={alt}
                    className="transition hover:scale-125"
                />
            </div>
            <div className="flex items-center flex-wrap">
                {
                    gallery.map(pic => (
                        <Image
                            key={pic.id}
                            src={`${BaseConfig.baseUrl}/media/images/products/${pic.image.replace("*", "75")}`}
                            width={70}
                            height={70}
                            alt={alt}
                            className="border p-1 ml-1 mt-1 rounded-md"
                            loading="lazy"
                        />
                    ))
                }
            </div>
        </div>
    )

}

export default ProductGallery;