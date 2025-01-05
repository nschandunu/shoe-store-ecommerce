import React, { useContext, useEffect, useState } from 'react';
import { FaRegWindowClose } from 'react-icons/fa';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { ShopContext } from '../context/shopContext';

const Cart = () => {
    const { products, currency, cartItems, getCartCount, navigate } = useContext(ShopContext);
    const [cartData, setCartData] = useState([]);
    const [quantities, setQuantities] = useState({});

    useEffect(() => {
        if (products.length > 0) {
            const tempData = [];
            const initialQuantities = {};

            for (const items in cartItems) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        tempData.push({
                            _id: items,
                            size: item,
                            quantity: cartItems[items][item]
                        });
                        initialQuantities[`${items} ${item}`] = cartItems[items][item];
                    }
                }
            }
            setCartData(tempData);
            setQuantities(initialQuantities);
        }
    },[cartItems, products]);

    const increment = (id, size) => {
        const key = `${id}-${size}`;
        const newValue = quantities[key] + 1;
        setQuantities(prev => ({ ...prev, [key]: newValue }));
        updateQuantity(id, size, newValue);
      };
      
      const decrement = (id, size) => {
        const key = `${id}-${size}`;
        if (quantities[key] > 1) {
          const newValue = quantities[key] - 1;
          setQuantities(prev => ({ ...prev, [key]: newValue }));
          updateQuantity(id, size, newValue);
        }
      };

      return (
        <div>
          <div>
            <div>
              {/* Title */}
              <Title title1={'Cart'} title2={'List'} title1Styles={'h3'} />
              <h5> ({getCartCount()} Items)</h5>
            </div>
            {/* Container */}
            <div>
              {cartData.map((item, i) => {
                const productData = products.find(
                  (product) => product._id === item._id
                );
                const key = `${item._id}-${item.size}`

                return (
                    <div key={i}>
                        <div>
                            <div>
                                <img src={productData.image[0]} alt="productImg" className='w-16 sm:w-18 rounded' />
                            </div>
                        </div>
                    </div>
                )
              })}
            </div>
          </div>
        </div>
      )
}

export default Cart;