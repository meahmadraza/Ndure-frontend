import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ProductCard from '../../../components/ProductCard';

const BASE_URL = 'https://sublime-beauty-ac64b64f48.strapiapp.com';

export default async function CategoryPage({ params }) {
    const slug = params?.slug;

    const res = await fetch(`${BASE_URL}/api/products?populate=*&filters[category][name][$eq]=${slug}`);

    if (!res.ok) {
        throw new Error('Failed to fetch category products');
    }
    const data = await res.json();
    const products = data.data;

    return (
        <>
            <Header />
            <div className='lg:px-6'>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-4">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={{
                                ...product,
                                id: product.id,
                                images: product.images || [],
                            }}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
