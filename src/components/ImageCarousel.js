'use client'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function ImageCarousel({ images }) {
    return (
        <Carousel showThumbs={false} infiniteLoop autoPlay swipeable emulateTouch>
            {images.length > 1 && (
                images.slice(1).map((img, i) => (
                    <div key={i} className="relative w-full aspect-square">
                        <Image
                            src={img}
                            alt={`Image ${i + 2}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                ))
            )}
        </Carousel>

    )
}
