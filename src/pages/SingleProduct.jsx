// SingleProduct.jsx
import React, { useState } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { useCart } from './CartContext.jsx'; // Importez le contexte
import PRODUCTS from '../data.js';
import Marquee from 'react-fast-marquee';
// import Skeleton from 'react-loading-skeleton';


const SingleProduct = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { pathname } = useLocation();
  const singleProduct = PRODUCTS.find((product) => product.id === parseInt(productId));
  const { id, name, price, image, details, type } = singleProduct;
  const { addToCart } = useCart(); // Utilisez la fonction addToCart du contexte
  const [quantity, setQuantity] = useState(1); // Ajout de l'état pour la quantité

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    addToCart(singleProduct, quantity);
  };

    // Filter related products
    const relatedProducts = PRODUCTS.filter(product => product.type === type && product.id !== parseInt(productId));

  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>{name}</h1>
              <p>{pathname}</p>
            </div>
            <div className="col-lg-5">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-end">
                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="breadcrumb-item"><Link to="/products">Products</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">{name}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container content">
        <div className="row">
          <div className="col-lg-5">
            <img src={image} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-7">
            <h2>{name}</h2>
            <p className="price"><strong>${price}</strong></p>
            <label>
              Quantity:
            <input className="mb-3"
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
          />
           </label>
        <p className="mb-3">Total Price: ${price * quantity}</p>
            <p>{details} {details} {details} {details} {details}</p>
            
            <br />
            <button className="btn btn-primary btn-sm" onClick={() => navigate(-1)}>
              BACK
            </button>{' '}
            &nbsp;
            <button className="btn btn-primary btn-sm" onClick={() => navigate('/products')}>
              NAVIGATE TO PRODUCTS
            </button>{' '}
            &nbsp;
            <Link to="/products" className="btn btn-primary btn-sm">
              PRODUCTS
            </Link>
            &nbsp;
            <Link to="/carts">
              {/* <button className="btn btn-danger btn-sm" onClick={() => addToCart(singleProduct)}> Add to Cart</button> */}
              <button className="btn btn-danger btn-sm" onClick={handleAddToCart}>Add to Cart</button>
            </Link>
          </div>
        </div>
      </div>
      <h3 style={{textAlign:'center'}}> Related Products : </h3>
      <h4 style={{textAlign:'center'}}> Catégorie : {type}</h4>
      <div className="container my-5 py-2 h-100">
        <div className="row">
        <Marquee pauseOnHover={true} pauseOnClick={true} speed={50}>
          {relatedProducts.map(product => (
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-12 my-3" key={product.id} style={{margin: '0 10px'}}>
                <div className="card h-100" style={{ height: '450px', width: '250px' }}>
                  <img className="card-img-top" style={{ objectFit: 'cover', height: '250px', width: 'auto' }} src={product.image} alt={product.name} />
                    <div className="card-body" style={{height:'200px',margin:'10px'}}>
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                
                    <Link to={`/products/${product.id}`} className="btn btn-primary btn-sm text-center" style={{ display: 'block', margin: '0 auto' }}>
                      DETAILS &#8594;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
      </div>
    </main>

  );
};

export default SingleProduct;