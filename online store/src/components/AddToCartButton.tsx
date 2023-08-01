import { add } from '../store/slices/cartsSlice'
import { useDispatch } from 'react-redux'
import { memo } from 'react';
import { CartsProduct } from '../models';

const AddToCartButton: React.FC<CartsProduct> = ({ id, thumbnail, title, price }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(add({ id, thumbnail, title, price }));
  }
  return (
    <button onClick={handleAddToCart} className=" btn-outline-secondary d-flex align-items-center  btn" >
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      </svg>
      <span className='ms-2'>
        Add to cart
      </span>
    </button>
  )
}

export default memo(AddToCartButton);