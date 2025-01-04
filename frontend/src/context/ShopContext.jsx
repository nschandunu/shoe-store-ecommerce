import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { products } from '../assets/data'
import { toast } from 'react-toastify'

export const ShopContext = createContext()

const ShopContextProvider = (props) => {

    const currency = "$"
    const delivery_charges = 10
    const navigate = useNavigate()
    const [search, setSearch] = useState("")
    const [showSearch, setShowSearch] = useState(true)
    const [token, setToken] = useState('')
    const [cartItems, setCartItems] = useState({})

    // Adding items to cart
    const addToCart = async(itemId, size) => {
        if(!size){
            toast.error('Please select a size')
            return;
        }
        let clearData = structuredClone(cartItems)
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
              cartData[itemId][size] += 1;
            } else {
              cartData[itemId][size] = 1;
            }
          } else {
            cartData[itemId] = {}; // Fixed: Changed (} to {}
            cartData[itemId][size] = 1;
          }
          setCartItems(cartData);

    }

    
    const value = { currency, delivery_charges, navigate, products, token, setToken, search, setSearch, showSearch, setShowSearch }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
