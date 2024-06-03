// app/pages/ProductPage.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function ProductPage({ product }) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart');
  };

  const handleform = () => {
    navigate('/');
  };

  if (!product) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 product-add'>
          <div>
            <h1>{product.title}</h1>
            <div className='product-details'>
              <img
                src={product.imageUrl}
                alt={product.description}
                className='product-image'
              />
              <div className='product-data'>
                <p>{product.description}</p>
                <h6>Price: {product.price}</h6>
                <h6>Discounted Price: {product.discountedPrice}</h6>
                {product.reviews.map((record, index) => (
                  <div className='review' key={index}>
                    <h1>Review</h1>
                    <h2>{record.username}</h2>
                    <p>{record.description}</p>
                    <p>Rating: {record.rating}</p>
                  </div>
                ))}
                <button onClick={handleAddToCart}>Add to Cart</button>
                <button onClick={handleform}>
                  <span>Go to Home</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
