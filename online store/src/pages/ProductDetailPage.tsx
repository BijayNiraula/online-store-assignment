import CartButton from '../components/CartButton';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import AddToCartButton from '../components/AddToCartButton';
import ErrorPage from '../components/ErrorPage';
import BackButton from '../components/BackButton';
import StarRatting from '../components/StarRatting';
import LoadingScreen from '../components/LoadingScreen';
import { Helmet } from 'react-helmet';
import { memo } from 'react';
import { Product } from '../models';
const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery<Product>(['products', id], async () => {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products/${id}`);
    return res.json();
  })
  if (isLoading) {
    return (
      <LoadingScreen />
    )
  }
  if (isError) {
    return (
      <>
        <ErrorPage />
      </>
    )
  }

  if (data) {

    return (
      <div className="product_detail_page row p-0 m-0 justify-content-center align-items-center border ">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{data.title}</title>
        </Helmet>
        <div className="col-md-8 col-sm-12 border  body ">
          <div className="d-flex justify-content-between mb-3 mt-3  ">
            <BackButton />
            <CartButton />
          </div>
          <div className="row m-0 p-0 py-4 px-4">
            <div className="col-md-5 col-sm-4">
              <img src={data.thumbnail} className='img-fluid ' width={300} height={300} alt="" />
            </div>
            <div className="col-md-7 col-sm-8">
              <h2 className=' fs-3 fw-bold border-end-0 border-dark pb-2 px-2 pt-sm-0 pt-2'>{data.title}</h2>
              <StarRatting rating={data.rating} />
              <br />

              <p className='mt-sm-2'>Price : <strong className='text-danger  fw-bold'> $ {data.price}</strong></p>
              <p className=''>Category: <strong className='fw-bold'> {data.category}</strong>  </p>
              <p>Description : <strong>{data.description}</strong></p>
              <div className="w-100 d-flex justify-content-around">
                <button className="btn-primary btn px-4">Buy</button>
                <AddToCartButton id={data.id} thumbnail={data.thumbnail} price={data.price} title={data.title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default memo(ProductDetailPage);