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
      console.log(selectedProduct);
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
            <div>
              <div>
                {product.image.map((item, i) => (
                  <img key={i} src={item} alt='producImg' className='max-h-[89px] rounded-lg' />
                ))}
              </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Product