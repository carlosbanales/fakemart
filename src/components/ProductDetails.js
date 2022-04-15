import Products from "./Products";
import { useParams } from 'react-router-dom';

function ProductDetails({products, loading}) {
  const params = useParams();

  return (
    <>
      {loading ? <div>...loading</div> :
      <div>
        <h3 className='Title'>{products[params.id - 1].title}</h3>
        <img className='ProductImage' src={products[params.id - 1].image} />
      </div>}
    </>
  );
}

export default ProductDetails;