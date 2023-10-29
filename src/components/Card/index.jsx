import { useContext } from "react";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid"
import { ShoppingCartContext } from "../../Context";

const Card = (data) => {
    const item = data.data;
    const { counter, setCounter, optSelectedSideMenu } = useContext(ShoppingCartContext)
    const { openProductDetail } = useContext(ShoppingCartContext)
    const { setProductToShow } = useContext(ShoppingCartContext)
    const { cartProducts, setCartProducts } = useContext(ShoppingCartContext)

    const showProduct = (item) => {
        openProductDetail()
        setProductToShow(item)
        optSelectedSideMenu("DETAIL")
    }

    const addProductsToCart = (event, itemsData) => {
        event.stopPropagation()
        openProductDetail()
        setCounter(counter + 1)
        setCartProducts([...cartProducts, itemsData])
        optSelectedSideMenu("CART")

    }

    const renderIcon = (id) => {
        const isInCart = cartProducts?.filter((item) => item.id === id).length > 0
        if (isInCart) {
            return (
                <button
                    className="absolute top-0 right-0 flex justify-center items-center bg-green-300  w-6 h-6 rounded-full m-2 px-1">
                    <CheckIcon className="h-6 w-6 text-green "></CheckIcon>
                </button>
            )
        } else {
            return (
                <button
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 px-1"
                    onClick={(event) => addProductsToCart(event, item)} >
                    <PlusIcon className="h-6 w-6 text-black"></PlusIcon>
                </button>
            )
        }
    }

    return (
        <div
            className="bg-white cursor-pointer w-56 h-60"
            onClick={() => showProduct(item)} >
            <figure className="relative mb-2 w-full h-4/5 ">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
                    {item.category.name}
                </span>
                <img
                    className="w-full h-full object-cover rounded-lg"
                    src={item.images[0]} alt={item.title} />
                {
                    renderIcon(item.id)
                }
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{item.title}</span>
                <span className="text-lg font-medium">${item.price}</span>
            </p>
        </div>
    )
}

export default Card;