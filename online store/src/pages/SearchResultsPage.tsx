import LoadingScreen from '../components/LoadingScreen';
import ErrorPage from '../components/ErrorPage';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import SearchResultsCard from '../components/SearchResultsCard';
import { memo } from 'react';
import NoProductFound from '../components/NoProductFound';
import BackButton from '../components/BackButton';
import { Helmet } from 'react-helmet';
import { ApiData, Product } from '../models';
const SearchResultsPage: React.FC = () => {
    const { state } = useLocation();
    const { searchTerm } = state || {}
    const { data, isLoading, isError } = useQuery<ApiData>(["products", searchTerm],
        async () => {
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products/search?q=${searchTerm}`);
            return res.json();
        }
    )
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
            <div className='container'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>searchResults</title>
                </Helmet>
                <div className="row justify-content-center mt-2">
                    <BackButton />
                    <div className="col-lg-8 col-md-9 col-sm-10 col-12">
                        <p className='fs-5 fw-bold mt-2 '>Results :  {data.total} </p>
                        {data.products ? data.products.map((product: Product) => <SearchResultsCard rating={product.rating} title={product.title} price={product.price} id={product.id} thumbnail={product.thumbnail} />) : <NoProductFound />}
                    </div>
                </div>
            </div>
        )
    }
}

export default memo(SearchResultsPage);