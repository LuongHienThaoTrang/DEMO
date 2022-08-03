import Home from './components';
import { StoreAllProducts, StoreLogin, StoreCart, StoreShoppingAdmin, StoreNavbarClient } from './components';
import ProductDetail from './components/client/ProductDetail'
import { Routes, Route } from 'react-router-dom'
// import { configureStore, createImmutableStateInvariantMiddleware } from '@reduxjs/toolkit'
// Lấy ra 1 component để tạo 1 vùng trôi nổi và nó đẩy store đi khắp cái App
// => Cho nó ôm toàn bộ App 
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

function App() {

  // State thay đổi thì giao diện thay đổi => mà state nó k phải nằm 1 chỗ mà nó nằm ngay trên store thì bất kì componnent mà connect với nó thì sẽ lấy được
  const initState = {
    cart: [
      // {
      //   // Id của product => Khi ta thêm sp vô giỏ hàng thì lấy nguyên cục product vô
      //   // Và đồng thời nó sẽ có thêm idCart, quantity
      //   id: 'ABC',
      //   name: 'Product 1',
      //   price: 84,
      //   quantity: 1,
      //   images: [
      //     "https://cdn2.yame.vn/pimg/ao-thun-co-tron-on-gian-ngan-ha-space-ver16-0020556/41df38d0-015d-e700-f7d7-0018ac665d36.jpg?w=540&h=756&c=true&ntf=false",
      //     "https://cdn2.yame.vn/pimg/ao-thun-co-tron-on-gian-ngan-ha-space-ver14-0020752/1b604dbb-c4eb-2e00-656f-0018fa2fcae7.jpg?w=540&h=756&c=true&ntf=false",
      //     "https://cdn2.yame.vn/pimg/ao-thun-co-tron-on-gian-ngan-ha-space-ver14-0020547/103ab4ab-aa6a-1000-9d7d-0018b1dcd5c9.jpg?w=540&h=756&c=true&ntf=false"
      //   ],
      //   cartId: 0
      // }
    ]
  }

  

  const rootReducer = (state = initState, action) => {
    let newCart
    switch (action.type) {
      case 'ADD_TO_CART':
        // Kiểm tra sản phẩm đó có trong giỏ hàng hay chưa, nếu có thì tăng quantity lên
        // findIndex sẽ trả về index của phần tử đó: từ 0 -> cộng vô cực nếu sp tồn tại, 
        // Nếu tìm không thấy thì trả về -1
        const exist = state.cart.findIndex(product => product.id === action.payload.id) 
        // Không tồn tại sp trong cart
        if (exist < 0) {
          newCart = [...state.cart, {
            ...action.payload,
            cartId: Date.now()         
          }]
        } else {
          // Đã tồn tại sản phẩm
          newCart = [...state.cart]
          newCart[exist].quantity += action.payload.quantity
        } 
        return {
          ...state,
          cart: newCart
        }
        
      case 'UPDATE_CART':
        // Nếu product tồn tại lấy ra cartId tương ứng với product.cartId
        const existCartId = state.cart.findIndex(product => product.cartId === action.payload.cartId) 
        newCart = [...state.cart]
        // Edit bằng cách thay số mới
        newCart[existCartId].quantity = action.payload.quantity //Truyền thẳng số mà ta muốn update
        return {
          ...state,
          cart: newCart
        }
      
      case 'DELETE_CART':
        // Nó sẽ return 1 mảng những product không bị xóa
        newCart = state.cart.filter(product => product.cartId !== action.payload) //action.payload: không là object vì gán thẳng cartId
        return {
          ...state,
          cart: newCart
        }

      default:
        return state
    }
  }


  const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(logger, thunk))
  )
  

  // const store = configureStore({
  //   reducer: rootReducer,
  //   middleware: [immutableInvariantMiddleware],
  //   devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
  // })
  
  
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
 