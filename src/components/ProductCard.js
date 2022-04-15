import { useNavigate } from "react-router-dom";

function ProductCard(props) {
  const {product} = props;
  const navigate = useNavigate();

  return (
    <div className='ProductCard' onClick={ () => { navigate('/products/' + product.id) } }>
      <h4 className='Title'>{props.title}</h4>
      <img className='ProductImage' src={props.img} />
      <p className="Price">Price: {props.price}</p>
    </div>
  );
}

export default ProductCard;