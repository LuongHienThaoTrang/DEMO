import ShoppingAdmin from './components';
// import ProductDetailHOC from './components/client/ProductDetail'
import ProductDetail from './components/client/ProductDetail'
import { StoreAllProducts, StoreLogin } from './components';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="app">
      {/* Admin: localhost:3000/admin */}
      {/* Client: localhost:3000/products */}
    <Routes>
      <Route path='/admin/login' element={<StoreLogin />}/>
      <Route path='/admin' element={<ShoppingAdmin />}/>
      {/* Tạo params khai báo biến :id có key là id (id=) */}
      <Route path='/products/:id' element={<ProductDetail />} />
      <Route path='/products' element={<StoreAllProducts />}/>
    </Routes>
    </div>
  );
}

export default App;
 