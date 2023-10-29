import { useContext } from 'react'
import './SideMenu.css'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import ProductDetail from '../ProductDetails'
import CheckoutSideCart from '../CheckoutSideCart'


const SideMenu = () => {
    const { isProductDetailOpen, closeProductDetail, optionSideMenu } = useContext(ShoppingCartContext)


    return (
        <aside
            className={`${isProductDetailOpen ? 'flex' : 'hidden'} side-menu flex-col fixed bg-white right-0 border border-black rounded`}>
            <div className="flex flex-row-reverse items-center pr-6 pt-6">
                <div onClick={() => closeProductDetail()}>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer'></XMarkIcon>
                </div>
            </div>

            {optionSideMenu === 'CART' ? <CheckoutSideCart /> : <ProductDetail />}
        </aside>
    )
}

export default SideMenu