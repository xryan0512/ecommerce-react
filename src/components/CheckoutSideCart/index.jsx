import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'


const CheckoutSideCart = () => {
    const { cartProducts, deleteCartProduct } = useContext(ShoppingCartContext)

    const deleteCartItem = (index) => {
        deleteCartProduct(index)
    }
    return (
        <div className='overflow-y-scroll'>
            <h2 className="pl-6 pb-3 font-medium text-xl">
                Cart
            </h2>
            {
                cartProducts.map((item, index) => (
                    <div className='border-y-4' key={item.id}>

                        <div className='flex flex-1 grow-0 justify-between mt-3 shadow-lg rounded-md '>
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
        </div>


    )
}

export default CheckoutSideCart