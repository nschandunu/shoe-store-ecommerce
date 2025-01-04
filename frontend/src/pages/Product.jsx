import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import { FaStar, FaStarHalfStroke, FaTruckArrowRight, FaTruckFast } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa';
import { TbShoppingBagPlus } from 'react-icons/tb';
import ProductDescription from '../components/ProductDescription';
import ProductFeatures from '../components/ProductFeatures';
import RelatedProducts from '../components/RelatedProducts';
import Footer from '../components/Footer';

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
      <div className='max-padd-container mt-3'>
        {/* Product Data */}
        <div className='flex gap-12 flex-col xl:flex-row bg-white pb-16 rounded-2xl'>
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
          <div className='flex-[1.5] rounded-2xl xl:px-7'>
            <h3 className='h3 leading-none'>{product.name}</h3>
            {/* Rating and Prices */}
            <div className='flex items-baseline gap-x-5'>
              <div className='flex items-center gap-x-2 text-secondary'>
                <div className='flex gap-x-2 text-secondary'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStarHalfStroke/>
                </div>
                <span className='medium-14'>(122)</span>
              </div>
            </div>
            <h4 className='h4 my-2'>{currency}{product.price}.00</h4>
            <p className='max-w-[555]'>{product.description}</p>
            <div className='flex flex-col gap-4 my-4 mb-5'>
              <div className='flex gap-2'>
                {[...product.sizes].sort((a,b)=>{
                  const order = ["5","6", "7", "8", "9", "10", "11", "12"];
                  return order.indexOf(a) - order.indexOf(b)
                }).map((item, i) => (
                    <button onClick={()=> setSize(item)} className={`${item === size ? "ring-1 ring-slate-900/20" : "ring-1 ring-slate-900/5"} medium-14 h-8 w-10 bg-primary rounded`}>{item}</button>
                ))}
              </div>
            </div>
            <div className='flex items-center gap-x-4'>
              <button className='btn-secondary !rounded-lg w-1/2 flexCenter gap-x-2 capitalize'>
                Add to Cart <TbShoppingBagPlus/>
              </button>
              <button className='btn-light !rounded-lg !py-3.5'><FaHeart/ ></button>
            </div>
            <div className='flex items-center gap-x-2 mt-3'>
              <FaTruckFast className='text-lg'/>
              <span className='medium-14'>Free Delivery on orders over $300</span>
            </div>
            <hr className='my-3 w-2/3'/>
            <div className='mt-2 flex flex-col gap-1 text-gray-30 text-xs'>
              <div>Authenticy You Can Trust</div>
              <div>Enjoy Cash on Delivery for Your Convenience</div>
              <div>Easy Returns and Exchanges Within 7 Days</div>
            </div>
          </div>
        </div>
        <ProductDescription />
        <ProductFeatures />
        <RelatedProducts />
    </div>
    {/* <Footer/> */}
  </div>
  )
}

export default Product