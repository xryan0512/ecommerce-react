import './product-detail.css'
import { XMarkIcon } from '@heroicons/react/24/solid'

const ProductDetail = () => {

    return (
        <aside
            className="product-detail flex flex-col fixed bg-white right-0 border border-black rounded">
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">
                    Detail
                </h2>
                <div>
                    <XMarkIcon className='h-6 w-6 text-black'></XMarkIcon>
                </div>
            </div>
        </aside>
    )
}

export default ProductDetail