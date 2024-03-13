import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './pages/MainLayout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Posts from './pages/Posts.jsx';
import Products from './pages/Products.jsx';
import SingleProduct from './pages/SingleProduct.jsx';
import Error from './pages/Error.jsx';
import Carts from './pages/carts.jsx';
import { CartProvider } from './pages/CartContext.jsx';
import Checkout from './pages/checkout.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	return (
		<div className='App'>
			<BrowserRouter scrollBehavior={() => ({ top: 0 })}>
				<CartProvider>
					<Routes>
						<Route path='/' element={<MainLayout />}>
							<Route index element={<Home />} />
							<Route path='about' element={<About />} />
							<Route path='products' element={<Products />} />
							<Route path='products/:productId' element={<SingleProduct />} />
							<Route path='posts' element={<Posts />} />
							<Route path = 'carts' element={<Carts />} />
							<Route path='*' element={<Error />} />
							<Route path='checkout' element={<Checkout />} />
						</Route>
					</Routes>
				</CartProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
