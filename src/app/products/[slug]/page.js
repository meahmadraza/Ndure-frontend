'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ImageCarousel from '../../../components/ImageCarousel'
import Footer from '../../../components/Footer'
import DetailScreenImages from '../../../components/DetailScreenImages'

export default async function ProductDetail({ params }) {
  const slug = params?.slug;
  const [product, setProduct] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products?populate=images&filters[slug][$eq]=${slug}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!product) return <p className="p-4">Loading...</p>


  const images = product?.images?.map((image) => (
    image?.formats?.small?.url
  ))
  console.log('In detail page images:', images)

  const availableSizes = product.sizes || []
  const allSizes = [39, 40, 41, 42, 43, 44]

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="block md:hidden mb-4">
        <ImageCarousel images={images} />
      </div>

      <div className="flex flex-col md:flex-row mt-5">
        <div className="hidden md:block md:w-7xl pr-6">
          <DetailScreenImages images={images} />
        </div>

        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl font-bold pt-4">{product.title}</h1>

          <div className="flex gap-6 mt-3">
            <p className="text-sm md:text-md lg:text-lg text-black line-through">
              Rs. {product.oldPrice}
            </p>
            <p className="text-sm md:text-md lg:text-lg text-black">
              Rs. {product.price}
            </p>
          </div>

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
                    ${!isAvailable
                      ? 'opacity-40 line-through cursor-not-allowed'
                      : ''
                    }
                    ${isSelected
                      ? 'bg-black text-white'
                      : 'bg-white text-black hover:border-black'
                    }`}
                >
                  {size}
                </button>
              )
            })}
          </div>

          <button className="w-full bg-black text-white py-3 text-center font-semibold mt-6 hover:opacity-90 transition hover:cursor-pointer">
            ADD TO BAG
          </button>

          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Product Description</h2>
            <p className="text-gray-700 whitespace-pre-line">{product.description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
