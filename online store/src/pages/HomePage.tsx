import { useQuery } from 'react-query';
import ErrorPage from '../components/ErrorPage';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import CartButton from '../components/CartButton';
import { Product } from '../models';
import Footer from '../components/Footer';
import { ApiData } from '../models';
import LoadingScreen from '../components/LoadingScreen';
const HomePage: React.FC = () => {
  const queryKey: string = "products"
  const { data, isLoading, isError } = useQuery<ApiData>({
    queryKey: queryKey,
    queryFn: async () => {
      const res: Response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products`);
      return res.json();
    }
  })

  if (isLoading) {
    return (
      <LoadingScreen />
    )
  }

  if (isError) {
    return (
      <ErrorPage />
    )
  }
  if (data) {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home page</title>
        </Helmet>
        <Header />
        <div className="container">
          <div className="row p-0 m-0 justify-content-center ">
            <div className="col-12 d-flex justify-content-end py-2">
              <CartButton />
            </div>
            {
              data.products.length ?
                data.products.map((product: Product) => <ProductCard key={product.id} id={product.id} thumbnail={product.thumbnail} title={product.title} rating={product.rating} />)
                : ""
            }
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default HomePage