import Navbar from './Navbar';
import Search from './Search';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="h-screen font-Kumbhsans">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Search />
              <ProductList />
            </>
          }
        />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
