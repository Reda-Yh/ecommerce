import {Link, NavLink} from 'react-router-dom';
import { useCart } from '../pages/CartContext';
import './Header.css'


const Header = () => {
  const { cartItems } = useCart();
  return (
    <header>
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>

          <div className='logo'>
            <Link to='/' className='brand'>Reda_yh</Link>
          </div>

          <nav className='nav nav-pills'>
            <NavLink to='/' 
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Home</NavLink>
            <NavLink to='about'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >About</NavLink>
            <NavLink to='products'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Products</NavLink>
            <NavLink to='posts'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Posts</NavLink>
            <NavLink to='carts'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >
                <div class="icon-cart">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"/>
                  </svg>
                  {/* <span>0</span> */}
                  <span>{cartItems.length}</span>
                  <span>{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
                </div>
            </NavLink>
                      <label htmlFor='theme' className='theme'>
            <span className='theme__toggle-wrap'>
              <input
                id='theme'
                className='theme__toggle'
                type='checkbox'
                role='switch'
                name='theme'
                value='dark'
              />
              <span className='theme__fill'></span>
              <span className='theme__icon'>
                <span className='theme__icon-part'></span>
                <span className='theme__icon-part'></span>
                <span className='theme__icon-part'></span>
                <span className='theme__icon-part'></span>
                <span className='theme__icon-part'></span>
                <span className='theme__icon-part'></span>
                <span className='theme__icon-part'></span>
                <span className='theme__icon-part'></span>
                <span className='theme__icon-part'></span>
              </span>
            </span>
          </label>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

// Carts                   <p>*{item.quantity}</p>                  <p>*{item.quantity}</p>  stroke-linejoin

