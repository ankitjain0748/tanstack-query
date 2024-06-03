// app/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CheckoutSuccessPage from './pages/CheckoutSuccessPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProductPageServer from './pages/ProductPage.server';
import './styles/App.css';

const App = () => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/products/:id" element={<ProductPageServer />} />
            <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
          </Routes>
          <Footer />
        </div>
      </QueryClientProvider>
    </Router>
  );
};

export default App;
