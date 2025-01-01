import React, { useContext, useEffect, useState } from 'react';
import Title from './Title';
import { ShopContext } from '../context/ShopContext';
import Item from './Item';

const PopularProducts = () => {
  const { products } = useContext(ShopContext);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const data = products.filter((item) => item.popular);
    setPopularProducts(data.slice(0, 5));
  }, [products]);

  return (
    <section className="max-padd-container py-16 bg-primary">
      <Title title1={'Popular'} title2={'Products'} titleStyles={'pb-10'} paraStyles={'!block'} />
      {/* Container */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {popularProducts.map((product) => (
          <Item key={product._id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts;