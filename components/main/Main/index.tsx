import Card from '../Card'
import db from '@/lib/db'

const Main = async () => {
    const products = await db.product.findMany({})
    return (
        <section className='mb-16'>
            <h1 className="text-center text-4xl">Подарункові сертифікати</h1>
            <div className='grid grid-cols-4'>
                {products.map(product => {
                    return <Card key={product.id} title={product.title} price={product.price} />
                })}
            </div>
        </section>
    )
}

export default Main