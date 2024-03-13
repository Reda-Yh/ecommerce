// Carts.jsx
import React from 'react';
import { useCart } from './CartContext.jsx';
import { Link } from 'react-router-dom';

const Carts = () => {
  const { cartItems, removeFromCart, updateQuantity} = useCart();

    // Calculate total sum
    const totalSum = cartItems.reduce((acc, item) => acc + item.price* parseInt(item.quantity), 0);
  

  return (
    <div className="container content" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)', marginTop: '20px' }}>
      <h1 style={{ fontSize: '28px', marginBottom: '20px', color: '#333' }}>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <div key={item.id} style={{ borderBottom: '1px solid #ddd', padding: '15px 0' }}>
              <img src={item.image} alt={item.name} style={{ width: '80px', height: 'auto', marginRight: '15px' }} />
              <div style={{ flexGrow: '1' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '5px', color: '#333' }}>{item.name}- Quantity: {item.quantity}</h3>
                <p style={{ fontSize: '18px', color: '#0a58ca', marginTop: '5px' }}>${item.price}</p>
                
                <label>
              Quantity:
                <input className="mb-3" type="number"value={item.quantity}min="1" onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}/>
                </label>
                <p className="mb-3">Total Price: ${item.price * item.quantity}</p>
                <p style={{ fontSize: '14px', color: '#666' }}>{item.details}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <button style={{ backgroundColor: '#ff0000', color: '#fff', padding: '5px 10px', fontSize: '14px', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' }}  onClick={() => removeFromCart(item)}>Remove</button>
                <Link to={`/products/${item.id}`} className="btn btn-primary btn-sm" style={{ backgroundColor: '#0a58ca', color: '#fff', padding: '5px 10px', fontSize: '14px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>WDetails</Link>
                
              </div>
            </div>
          ))}
           <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <p style={{ fontSize: '18px', color: '#333' }}>Total: ${totalSum}</p>
            <div>
              <Link to={"/checkout"}>
              <button style={{ backgroundColor: '#0a58ca', color: '#fff', padding: '8px 15px', fontSize: '16px', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' }}>Checkout</button>
              </Link>
              <Link to={"/products"}>
              <button style={{ backgroundColor: '#333', color: '#fff', padding: '8px 15px', fontSize: '16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Continue Shopping</button>
              </Link>
            </div>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Carts;

// li li <datagrid></datagrid>


// <button
// style={{ backgroundColor: '#333', color: '#fff', padding: '5px 10px', fontSize: '14px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
// onClick={() => handleDetailsClick(item.id)}
// >
// Details
// </button>  #333 danger

// const handleDetailsClick = (itemId) => {
//   // You can implement the logic to show additional details for the item with itemId.
//   console.log(`Show details for item with ID: ${itemId}`);
// };