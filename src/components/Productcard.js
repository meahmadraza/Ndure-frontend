import Link from 'next/link'
import Image from 'next/image'

export default function ProductCard({ product }) {
    const BASE_URL = 'https://striking-miracle-75163e8551.strapiapp.com';
    const imageUrl = product.images?.[0]?.formats?.small?.url;

    const fullImageUrl = imageUrl?.startsWith('http')
        ? imageUrl
        : BASE_URL + imageUrl;



    return (
        <Link href={`/products/${product.slug}`} className="block group overflow-hidden">
            <div className="relative w-full aspect-square overflow-hidden">
                <Image
                    src={fullImageUrl}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
            </div>

            <div className="flex flex-col gap-1 py-2">
                <img src={fullImageUrl} className="w-10" />
                <h3 className="text-sm font-semibold pt-2">
                    {product.title}
                </h3>
                <div className="flex gap-8">
                    <p className="text-sm text-black line-through">Rs. {product.oldPrice}</p>
                    <p className="text-sm text-black">Rs. {product.price}</p>
                </div>
            </div>
        </Link>
    )
}