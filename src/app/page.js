import axios from 'axios'
import ProductCard from '../components/Productcard'
import Header from '../components/Header'

async function getProducts() {
  const res = await axios.get('http://localhost:1337/api/products?populate=*')
  console.log(res.data.data)
  return res.data.data
}

export default async function HomePage() {
  const products = await getProducts()

  return (
    <>
      <Header />
      <div className='lg:px-6'>
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
      </div>
    </>
  )
}
