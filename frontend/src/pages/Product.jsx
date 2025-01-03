import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import { FaStar, FaStarHalfStroke, FaTruckFast } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa';
import { TbShoppingBagPlus } from 'react-icons/tb';

const Product = () => {

  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [product, setProduct] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    const selectedProduct = products.find((item) => item._id === productId);
    if (selectedProduct) {
      setProduct(selectedProduct);
      setImage(selectedProduct.image[0]);
      //console.Log(selectedProduct)
    }
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        {/* Product Data */}
        <div>
          {/* Product Image */}
            <div className='flex flex-1 gap-x-2 xl:flex-1'>
              <div className='flexCenter flex-col gap-[7px] flex-wrap'>
                {product.image.map((item, i) => (
                  <img onClick={()=> setImage(item)} key={i} src={item} alt='productImg' className='max-h-[89px] rounded-lg' />
                ))}
              </div>
              <div className='max-h-[377px] flex overflow-hidden'>
                <img src={image} alt="productImg" className='w-auto max-h-[377px] rounded-xl bg-gray-10' />
              </div>
            </div>
          {/* Product info */}
        </div>
    </div>
  </div>
  )
}

export default Product