import React from 'react'
import Image from 'next/image'

const DetailScreenImages = ({ images }) => {
    console.log('DetailScreenImages images:', images)
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images?.slice(1).map((img, index) => (
                <div key={index} className="relative w-full aspect-square group overflow-hidden">
                    <Image
                        src={process.env.NEXT_PUBLIC_API_URL == 'http://localhost:1337' ? process.env.NEXT_PUBLIC_API_URL + img : img}
                        alt={`Product image ${index + 1}`}
                        fill
                        className="object-contain hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            ))}
        </div>
    )
}

export default DetailScreenImages
