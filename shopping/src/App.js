import ShoppingAdmin from './components';
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
      <Route path='/products' element={<StoreAllProducts />}/>
    </Routes>
    </div>
  );
}

export default App;
