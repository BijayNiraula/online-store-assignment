
const NoProductFound: React.FC = () => {
  return (
    <div className="alert alert-danger text-center mt-5" role="alert">
      <strong>No Products Found</strong> Sorry, we couldn't find any products that match your search criteria.
    </div>
  )
}

export default NoProductFound