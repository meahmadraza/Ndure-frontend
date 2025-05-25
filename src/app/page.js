import axios from 'axios'
import Link from 'next/link'
import ProductCard from '../components/ProductCard'
import Header from '../components/Header'

async function getProducts() {
  const res = await axios.get('https://striking-miracle-75163e8551.strapiapp.com/api/products?populate=*')
  console.log(res.data.data)
  return res.data.data
}

export default async function HomePage() {
  const products = await getProducts()

  return (
    <div className='bg-[url("/Home-page-img.webp")] bg-cover bg-no-repeat bg-center w-full h-screen'>
      <Header />
      <div className='pl-4 lg:pl-10 py-2 sticky top-24 z-10'>
        <ul className='flex justify-start gap-[4%] lg:gap-[3%] font-semibold text-sm uppercase text-white'>
          <li><Link href={'/collections/men-all-shoes'}>Men</Link></li>
          <li><Link href='/collections/women-all-shoes'>Women</Link></li>
          <li><Link href='/collections/kids-all-shoes'>Kids</Link></li>
          <li><Link href='/collections/summer-2025'>New In</Link></li>
          <li><Link href='/collections/sale'>Sale</Link></li>
        </ul>

      </div>
      {/* <div className='lg:px-6'>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-4">
          {products.map((p) => {
            return (
              <ProductCard
                key={p.id}
                product={{
                  ...p,
                  id: p.id,
                  images: p.images || []
                }}
              />
            )
          })}
        </div>
      </div> */}
    </div>
  )
}