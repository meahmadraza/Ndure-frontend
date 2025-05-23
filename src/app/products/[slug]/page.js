'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import ImageCarousel from '../../../components/ImageCarousel'
import DetailScreenImages from '../../../components/DetailScreenImages'

export default function ProductDetail({ params }) {
    const BASE_URL = "http://localhost:1337"
    const slug = params?.slug
    const [product, setProduct] = useState(null)
    const [selectedSize, setSelectedSize] = useState(null)

    useEffect(() => {
        async function fetchProduct() {
            const res = await axios.get(`${BASE_URL}/api/products?populate=*&filters[slug][$eq]=${slug}`)
            setProduct(res.data.data[0])
        }
        fetchProduct()
    }, [slug])

    if (!product) return <p className="p-4">Loading...</p>

    const images = product?.images?.map((image) => (
        BASE_URL + image?.formats?.small?.url
    ))

    const availableSizes = product?.sizes || []
    const allSizes = [39, 40, 41, 42, 43, 44]

    return (
        <div className="p-4 max-w-7xl mx-auto">
            <div className="block md:hidden mb-4">
                <ImageCarousel images={images} />
            </div>

            <div className="flex flex-col md:flex-row mt-5">
                {/* DetailScreenImages - Hidden on sm/md, shown on lg+ */}
                <div className="hidden md:block md:w-7xl pr-6">
                    <DetailScreenImages images={images} />
                </div>

                {/* Product Details */}
                <div className="w-full lg:w-1/2">
                    <h1 className="text-2xl font-bold pt-4">{product.title}</h1>

                    <div className="flex gap-6 mt-3">
                        <p className="text-sm md:text-md lg:text-lg text-black line-through">Rs. {product.oldPrice}</p>
                        <p className="text-sm md:text-md lg:text-lg text-black">Rs. {product.price}</p>
                    </div>

                    {/* Sizes */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        {allSizes.map((size) => {
                            const isAvailable = availableSizes.includes(size)
                            const isSelected = selectedSize === size
                            return (
                                <button
                                    key={size}
                                    disabled={!isAvailable}
                                    onClick={() => isAvailable && setSelectedSize(size)}
                                    className={`px-4 py-2 border text-sm rounded transition hover:cursor-pointer
              ${!isAvailable ? 'opacity-40 line-through cursor-not-allowed' : ''}
              ${isSelected ? 'bg-black text-white' : 'bg-white text-black hover:border-black'}
            `}
                                >
                                    {size}
                                </button>
                            )
                        })}
                    </div>

                    {/* Add to Bag */}
                    <button className="w-full bg-black text-white py-3 text-center font-semibold mt-6 hover:opacity-90 transition hover:cursor-pointer">
                        ADD TO BAG
                    </button>

                    {/* Description */}
                    <div className="mt-6">
                        <h2 className="text-lg font-semibold mb-2">Product Description</h2>
                        <p className="text-gray-700 whitespace-pre-line">{product.description}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
