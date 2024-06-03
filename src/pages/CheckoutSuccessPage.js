import React, { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function CheckoutSuccessPage() {
  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  const handleform =()=>{
    navigate('/')
  }


  return (
    <div className='container checkout-data'>
      <div className='row'>
        <div className='col-md-12'>
      <p>
      <i class="bi bi-cart-check-fill"></i>
        Your order was successful!</p>
      <button onClick={handleform}>Go back to the Home</button>

        </div>
      </div>
    </div>
  );
}

export default CheckoutSuccessPage;
