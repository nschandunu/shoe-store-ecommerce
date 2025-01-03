import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import { FaStar, FaStarHalfStroke, FaTruckArrowRight, FaTruckFast } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa';
import { TbShoppingBagPlus } from 'react-icons/tb';
import ProductDescription from '../components/ProductDescription';

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
          <div>
            <h3>{product.name}</h3>
            {/* Rating and Prices */}
            <div>
              <div>
                <div>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStarHalfStroke/>
                </div>
                <span>(122)</span>
              </div>
            </div>
            <h4>{currency}{product.price}.00</h4>
            <p>{product.description}</p>
            <div>
              <div>
                {[...product.sizes].sort((a,b)=>{
                  const order = ["5","6", "7", "8", "9", "10", "11", "12"];
                  return order.indexOf(a) - order.indexOf(b)
                }).map((item, i) => (
                    <button>{item}</button>
                ))}
              </div>
            </div>
            <div>
              <button>
                Add to Cart <TbShoppingBagPlus/>
              </button>
              <button><FaHeart/ ></button>
            </div>
            <div>
              <FaTruckFast className='text-lg'/>
              <span>Free Delivery on orders over $300</span>
            </div>
            <hr className='my-3 w-2/3'/>
            <div>
              <div>Authenticy You Can Trust</div>
              <div>Enjoy Cash on Delivery for Your Convenience</div>
              <div>Easy Returns and Exchanges Within 7 Days</div>
            </div>
          </div>
        </div>
        <ProductDescription />
    </div>
  </div>
  )
}

export default Product