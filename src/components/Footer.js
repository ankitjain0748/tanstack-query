import React from 'react';
import { Link } from 'react-router-dom';
// import PandaImg from "./public/images.png"
function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <p>© 2022 My Ecom Store</p>
            <div className='footer-icon'>
              <Link to="">
              <img src=""/>
              </Link>

              <Link to="">
              <img src="/images.png" alt=''/>
              </Link>

              <Link to="">
              <img src="" alt=''/>

              </Link>

          
            </div>
          </div>
        </div>
      </div>


    </footer>
  );
}

export default Footer;
