import React, { useContext } from 'react';
import { fetchProducts } from '../api/api';

import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Header() {

  const { cartItems } = useContext(CartContext);
  console.log("cartItems", cartItems.length)

  const navigate = useNavigate()

  const handleform = () => {
    navigate('/cart')
  }

  //   const [products, setProducts] = useState([]);
  //  const [searchTerm, setSearchTerm] = useState('');

  //   useEffect(() => {
  //     console.log(fetchProducts());
  //     fetchProducts().then(setProducts);
  //   }, []);

  //   const filteredProducts = products.filter(product =>
  //     product.title.toLowerCase().includes(searchTerm.toLowerCase())
  //   );

  // const [scrolled, setScrolled] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const isScrolled = window.scrollY > 50;
  //     if (isScrolled !== scrolled) {
  //       setScrolled(isScrolled);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [scrolled]);

  return (
    <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="/">
                <span id="logo">CRA</span>
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="/">Home </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/contact">Contact</a>
                  </li>

                </ul>

                <span id="home" onClick={handleform}>
  <i className="bi bi-cart">
    <sup>{cartItems?.length}</sup>
  </i>
</span>

              </div>
            </nav>
          </div>
        </div>
      </div>


  );
}

export default Header;
