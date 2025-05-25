'use client'

import Header from '../components/Header'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/home-page-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/20 z-0" />

        <div className="relative z-10">
          <Header />
          <div className="pl-4 lg:pl-10 sticky top-16 z-20">
            <ul className="flex justify-start gap-[4%] font-semibold text-sm uppercase text-white">
              <li><Link href="/collections/men-all-shoes">Men</Link></li>
              <li><Link href="/collections/women-all-shoes">Women</Link></li>
              <li><Link href="/collections/kids-all-shoes">Kids</Link></li>
              <li><Link href="/collections/summer-2025">New In</Link></li>
              <li><Link href="/collections/sale">Sale</Link></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Footer here */}
    </div>
  )
}
