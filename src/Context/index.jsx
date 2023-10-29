import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()


export const ShoppingCartProvider = ({ children }) => {
    //Shopping Cart - Increment quantity
    const [counter, setCounter] = useState(0)

    //Product Detail - open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //Product detail - show product
    const [productToShow, setProductToShow] = useState({})

    //Shopping cart - Add product to cart
    const [cartProducts, setCartProducts] = useState([])
    //Shoping cart - Delete Product
    const deleteCartProduct = (index) => {
        let arr = cartProducts;
        cartProducts.splice(index, 1)
        setCartProducts([...arr])
    }

    const [optionSideMenu, setOptionSideMenu] = useState('')
    const optSelectedSideMenu = (opt) => {
        setIsProductDetailOpen(true)
        setOptionSideMenu(opt)
    }
    return (
        <ShoppingCartContext.Provider value={{
            counter,
            setCounter,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            deleteCartProduct,
            optSelectedSideMenu,
            optionSideMenu
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}