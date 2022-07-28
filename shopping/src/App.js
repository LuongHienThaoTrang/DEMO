import Home from './components';
import { StoreAllProducts, StoreLogin, StoreCart, StoreShoppingAdmin, StoreNavbarClient } from './components';
import ProductDetail from './components/client/ProductDetail'
import { Routes, Route } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
// Lấy ra 1 component để tạo 1 vùng trôi nổi và nó đẩy store đi khắp cái App
// => Cho nó ôm toàn bộ App 
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

function App() {

  const initState = {
    cart: [
      {
        id: 'ABC',
        name: 'Product 1',
        price: 200
      }
    ]
  }

  const rootReducer = (state = initState, action) => {
    console.log(state);
    return state
  }

  const store = configureStore({
    reducer: rootReducer,
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
  })
  

  

  return (
    // Provider để vận chuyển store
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          {/* Admin: localhost:3000/admin */}
          {/* Client: localhost:3000/products */}
          <StoreNavbarClient />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/cart' element={<StoreCart />}/>
            <Route path='/admin/login' element={<StoreLogin />}/>
            <Route path='/admin' element={<StoreShoppingAdmin />}/>
            {/* Tạo params khai báo biến :id có key là id (id=) */}
            <Route path='/products/:id' element={<ProductDetail />} />
            <Route path='/products' element={<StoreAllProducts />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
 