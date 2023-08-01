import { useSelector } from 'react-redux';
import CartsItemCard from '../components/CartsItemCard';
import BackButton from '../components/BackButton';
import { memo } from 'react';
import EmptyCartsMessage from '../components/EmptyCartsMessage';
import { Helmet } from 'react-helmet';
import { CartsProduct, GlobalState } from '../models';
const CartsPage: React.FC = () => {
  const cartsProducts: CartsProduct[] = useSelector((state:GlobalState) =>state.carts.cartsProducts);
  return (
    <div className='container'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Carts page</title>
      </Helmet>
      <div className="row justify-content-center mt-5">
        <div className="d-flex justify-content-start col-12 mb-2">
          <BackButton />
        </div>
        <div className=" col-md-8 col-sm-10 col-11">
          <h3>Your Carts Items : </h3>
          <hr />
          <div>
            {cartsProducts.length ?
              cartsProducts.map((cartProduct: CartsProduct) => <CartsItemCard id={cartProduct.id} thumbnail={cartProduct.thumbnail} title={cartProduct.title} price={cartProduct.price} key={cartProduct.id} />)
              : <EmptyCartsMessage />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(CartsPage);