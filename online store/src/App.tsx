import { BrowserRouter, Route, Routes } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import HomePage from "./pages/HomePage"
import CartsPage from "./pages/CartsPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import SearchResultsPage from "./pages/SearchResultsPage"
import { Provider } from "react-redux"
import store from "./store/store"

const App: React.FC = () => {
  const queryClient: QueryClient = new QueryClient();
  return (
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path='*' element={<HomePage />} />
            <Route path='/productDetail/:id' element={<ProductDetailPage />} />
            <Route path='/carts' element={<CartsPage />} />
            <Route path='/searchProducts/' element={<SearchResultsPage />} />
          </Routes>
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  )
}

export default App
