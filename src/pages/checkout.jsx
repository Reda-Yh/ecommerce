import React, { useState,useEffect,useMemo } from 'react';
import { useCart } from './CartContext.jsx';

const Checkout = () => {

    const [subtotal, setSubtotal] = useState(0);
    const [shipping, setShipping] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const { cartItems } = useCart();

    const memoizedShipping = useMemo(() => {
      const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
      return totalQuantity < 2 ? 20 : 40;
    }, [cartItems]);
    
    const memoizedTotal = useMemo(() => {
      const totalSum = cartItems.reduce((acc, item) => acc + item.price * parseInt(item.quantity), 0);
      return totalSum + memoizedShipping;
    }, [cartItems, memoizedShipping]);
    
    useEffect(() => {
      setShipping(memoizedShipping);
      setSubtotal(memoizedTotal);
    }, [memoizedShipping, memoizedTotal]);

    // const { cartItems } = useCart();

    const totalSum = cartItems.reduce((acc, item) => acc + item.price* parseInt(item.quantity), 0);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    address2: '',
    country: '',
    state: '',
    zip: '',
    ccName: '',
    ccNumber: '',
    ccExpiration: '',
    ccCvv: '',
  });

    const [validation, setValidation] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    country: '',
    state: '',
    zip: '',
    ccName: '',
    ccNumber: '',
    ccExpiration: '',
    ccCvv: '',
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    const isEmpty = /^\s*$/.test(value);
    setValidation({ ...validation, [name]: isEmpty ? 'is-invalid' : 'is-valid' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container py-5">
      <div className="row my-4">
        <div className="col-md-5 col-lg-4 order-md-last">
          <div className="card mb-4">
            <div className="card-header py-3 bg-light">
              <h5 className="mb-0">Order Summary</h5>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Products {cartItems.reduce((total, item) => total + item.quantity, 0)}<span>${totalSum}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                  Shipping
                  <span>${shipping}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                  </div>
                  <span>
                    <strong>${subtotal}</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-7 col-lg-8">
          <div className="card mb-4">
            <div className="card-header py-3">
              <h4 className="mb-0">Billing address</h4>
            </div>
            <div className="card-body">
              <form className="needs-validation" onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                  <div className="col-sm-6 my-1">
                    <label htmlFor="firstName" className="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      className={`form-control ${validation.firstName}`}
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">
                    {validation.firstName === 'is-invalid' ? 'Valid first name is required.' : ''} Valid first name is required.
                    </div>
                  </div>

                  <div className="col-sm-6 my-1">
                    <label htmlFor="lastName" className="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      className={`form-control ${validation.lastName}`}
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">
                    {validation.lastName === 'is-invalid' ? 'Valid last name is required.' : ''}Valid last name is required.
                    </div>
                  </div>

                  <div className="col-12 my-1">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className={`form-control ${validation.email}`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                    <div className="invalid-feedback">
                    {validation.email === 'is-invalid' ? 'Valid email is required.' : ''} Please enter a valid email address for shipping updates.
                    </div>
                  </div>

                  <div className="col-12 my-1">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className={`form-control ${validation.address}`}
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="1234 Main St"
                      required
                    />
                    <div className="invalid-feedback">
                    {validation.address === 'is-invalid' ? 'Valid email is required.' : ''}Please enter your shipping address.
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="address2" className="form-label">
                      Address 2 <span className="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address2"
                      name="address2"
                      value={formData.address2}
                      onChange={handleChange}
                      placeholder="Apartment or suite"
                    />
                  </div>

                  <div className="col-md-5 my-1">
                    <label htmlFor="country" className="form-label">
                      Country
                    </label>
                    <select
                      className={`form-select ${validation.country}`}
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose...</option>
                      <option>India</option>
                    </select>
                    <div className="invalid-feedback">
                      {validation.country === 'is-invalid' ? 'Valid email is required.' : ''}Please select a valid country.
                    </div>
                  </div>

                  <div className="col-md-4 my-1">
                    <label htmlFor="state" className="form-label">
                      State
                    </label>
                    <select
                      className={`form-select ${validation.state}`}
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose...</option>
                      <option>Punjab</option>
                    </select>
                    <div className="invalid-feedback">
                      {validation.state === 'is-invalid' ? 'Valid email is required.' : ''}Please provide a valid state.
                    </div>
                  </div>

                  <div className="col-md-3 my-1">
                    <label htmlFor="zip" className="form-label">
                      Zip
                    </label>
                    <input
                      type="text"
                      className={`form-control ${validation.zip}`}
                      id="zip"
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">
                      {validation.zip === 'is-invalid' ? 'Valid email is required.' : ''}Zip code required.
                    </div>
                  </div>
                </div>

                <hr className="my-4" />

                <h4 className="mb-3">Payment</h4>

                <div className="row gy-3">
                  <div className="col-md-6">
                    <label htmlFor="cc-name" className="form-label">
                      Name on card
                    </label>
                    <input
                      type="text"
                      className={`form-control ${validation.ccName}`}
                      id="cc-name"
                      name="ccName"
                      value={formData.ccName}
                      onChange={handleChange}
                      required
                    />
                    <small className="text-muted">
                      Full name as displayed on card
                    </small>
                    <div className="invalid-feedback">
                      {validation.ccName === 'is-invalid' ? 'Valid email is required.' : ''}Name on card is required
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="cc-number" className="form-label">
                      Credit card number
                    </label>
                    <input
                      type="text"className={`form-control ${validation.ccNumber}`}
                      id="cc-number"
                      name="ccNumber"
                      value={formData.ccNumber}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">
                      {validation.ccNumber === 'is-invalid' ? 'Valid email is required.' : ''}Credit card number is required
                    </div>
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="cc-expiration" className="form-label">
                      Expiration
                    </label>
                    <input
                      type="text"
                      className={`form-control ${validation.ccExpiration}`}
                      id="cc-expiration"
                      name="ccExpiration"
                      value={formData.ccExpiration}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">
                      {validation.ccNumber === 'is-invalid' ? 'Valid email is required.' : ''}Expiration date required
                    </div>
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="cc-cvv" className="form-label">
                      CVV
                    </label>
                    <input
                      type="text"
                      className={`form-control ${validation.ccCvv}`}
                      id="cc-cvv"
                      name="ccCvv"
                      value={formData.ccCvv}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">
                      {validation.ccCvv === 'is-invalid' ? 'Valid email is required.' : ''}Security code required
                    </div>
                  </div>
                </div>

                <hr className="my-4" />

                <button
                  className="w-100 btn btn-primary"
                  type="submit"
                  disabled={
                    !formData.firstName ||
                    !formData.lastName ||
                    !formData.email ||
                    !formData.address ||
                    !formData.country ||
                    !formData.state ||
                    !formData.zip ||
                    !formData.ccName ||
                    !formData.ccNumber ||
                    !formData.ccExpiration ||
                    !formData.ccCvv
                  }
                >
                  Continue to checkout
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
);
};

export default Checkout;



// {Math.round(subtotal)}
// setShipping = 20
// setShipping(40)a}
// const updatetatal
// {/* <strong>${totalSum}</strong> */}
// Subto
// const total = totalQuantity + shipping
// className={"form-control"}
// "form-control"
// "form-control"
// "form-control"
// "form-control"
// "form-select"
// className
// "form-select"
// "form-control"
// stzite
// "form-control"
// ccName*
// "form-control"
// "form-control"
// "form-control"