import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PRODUCTS from '../data.js';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchName = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchType = selectedType === '' || product.type === selectedType;
    return matchName && matchType;
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  return (
    <main>
    <div className="pg-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h1>Products</h1>
          </div>
          <div className="col-lg-5">
            <nav>
              <ol className="breadcrumb justify-content-end">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">Products</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div className="container content">
      <div className="row mb-3">
        <div className="col-lg-12">
          <div className="d-flex justify-content-between align-items-center">
            <div className="input-group">
              <label className="input-group-text" htmlFor="search">Search:</label>
              <input
                type="text"
                id="search"
                className="form-control"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div className="input-group ml-3">
              <label className="input-group-text" htmlFor="type">Type:</label>
              <select
                id="type"
                className="form-select"
                value={selectedType}
                onChange={handleTypeChange}
              >
                <option value="">All Types</option>
                <option value="Electronics">Electronics</option>
                <option value="Footwear">Footwear</option>
                <option value="Wearables">Wearables</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="row products-row">
        {filteredProducts.map((product) => (
          <div className="col-lg-4" key={product.id}>
            <div className="card h-100">
              <div className="img-wrap">
                <img src={product.image} alt="" className="card-img-top" />
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.details}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span>Price: <strong className="price">${product.price}</strong></span>
                  <Link to={`/products/${product.id}`} className="btn btn-primary btn-sm">DETAILS &#8594;</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </main>
    
  );
}

export default Products;

// £