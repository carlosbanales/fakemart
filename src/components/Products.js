import { Outlet } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useState } from 'react';
 
function Products({allProducts, loading}) {

  return (
   <div>
     <>
      <Outlet />
      { loading ? <div>...loading</div> :
        <div className='ProductsContainer'>
          {allProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              title={product.title}
              price={product.price}
              img={product.image}
            />
          ))

          }
        </div>

      }
     </>
   </div>
  );
}

export default Products;