import StarRatting from './StarRatting'
import { Link } from 'react-router-dom'
type searchResultCardProps = {
  id: number;
  thumbnail: string;
  title: string;
  rating: number;
  price: number;
}
const SearchResultsCard: React.FC<searchResultCardProps> = ({ id, title, thumbnail, rating, price }) => {

  return (

    <Link to={`/productDetail/${id}`} className='row mb-4 search_results_card p-3'>
      <div className="col-5 p-2">
        <img src={thumbnail} alt="" width={200} height={200} className="img-fluid" />
      </div>
      <div className="col-7">
        <span className='fs-4'>{title}  </span>
        <StarRatting rating={rating} />
        <p className='mt-2 text-dark'>Price : <span className="text-danger"> $ {price}</span></p>
      </div>
    </Link>
  )
}

export default SearchResultsCard