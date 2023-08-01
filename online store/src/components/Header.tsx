import { useNavigate } from 'react-router-dom';
import { memo ,useState} from 'react';
import React from 'react';

const Header: React.FC= () => {
 const [searchTerm, setSearchTerm] = useState<string>("")
  const navigate = useNavigate()
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      navigate("/searchProducts", { state: { searchTerm } });
  }
  return (
    <header className='bg-dark nav_bar py-2 '>
      <div className="container ">
        <div className="row m-0 p-0 justify-content-sm-none justify-content-center ">
          <h1 className='text-light fw-bold col-lg-8 col-md-7 col-sm-6 fs-2 d-flex align-items-center fw-bold'>
            ONLINE STORE
          </h1>
          <form onSubmit={handleSearch} className='search_bar row    col-lg-4 col-md-5 col-sm-6 mt-sm-0 mt-1'>
            <input value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}  type="search" placeholder='search here...' className='px-1 py-2 col-10  ' name="" id="" />
            <button className="btn btn-white col-2 p-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </header>
  )
}

export default memo(Header);