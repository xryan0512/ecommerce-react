import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { totalPrice } from '../../utils'

const CheckoutSideCart = () => {
    const { cartProducts, deleteCartProduct, setOrder, order, setCartProducts } = useContext(ShoppingCartContext)
    const deleteCartItem = (index) => {
        deleteCartProduct(index)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: Date.now(),
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts)
        }

        setOrder([...order, orderToAdd])
        setCartProducts([])
    }

    return (
        <div className='overflow-y-scroll'>
            <h2 className="pl-6 pb-3 font-medium text-xl">
                Cart
            </h2>
            {
                cartProducts.map((item, index) => (
                    <div className='border-y-4' key={item.id}>

                        <div className='flex grow-0 justify-between mt-3 shadow-lg rounded-md '>
                            <div className='p-2 w-20 '>
                                <img src={item.images} alt="" />
                            </div>
                            <div className='p-2 self-start text-xs mt-2'>{item.title}</div>
                            <div className='p-2 self-end font-bold'>Price: ${item.price}</div>
                            <div
                                className='float-right top-0 mr-2 relative text-red-500 font-bold'
                                onClick={() => deleteCartItem(index)}
                            >x</div>
                        </div>
                    </div>
                ))
            }
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center pt-2'>
                    <span className="font-medium">Total</span>
                    <span className='font-medium text-xl'> ${totalPrice(cartProducts)}</span>
                </p>

                <button className='bg-black py-3 mt-6 text-white rounded-lg w-full' onClick={() => handleCheckout()}>Checkout</button>
            </div>
        </div>


    )
}

export default CheckoutSideCart