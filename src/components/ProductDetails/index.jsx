import { useContext } from 'react'
import './product-detail.css'

import { ShoppingCartContext } from '../../Context'

const ProductDetail = () => {
    const { productToShow } = useContext(ShoppingCartContext)
    const { images, title, price, description } = productToShow


    return (
        <div>
            <h2 className="pl-6 pb-3 font-medium text-xl">
                Details
            </h2>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg' src={images} alt={title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${price}</span>
                <span className='font-medium text-md'>{title}</span>
                <span className='font-medium text-sm'>{description}</span>
            </p>
        </div>
    )
}

export default ProductDetail