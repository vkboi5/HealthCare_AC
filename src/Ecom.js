import React, { useState, useEffect } from 'react';
import './Ecom.css'; // Import CSS file
import mr1 from './mr1.jpg'; // Import images correctly
import oip from './OIP.jpg';
import mr2 from './mr2.jpg';
import s1 from './s1.jpg'; // Import s1 to s7 images
import s2 from './s2.jpg';
import s3 from './s3.jpg';
import s4 from './s4.jpg';
import s5 from './s5.jpg';
import s6 from './s6.jpg';
import s7 from './s7.jpg';

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [oip, mr1, mr2]; // Use imported images

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(current => (current + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-container">
      <img
        className="banner-image"
        src={images[currentImageIndex]}
        alt={`Banner ${currentImageIndex + 1}`}
      />
    </div>
  );
};

const Product = ({ product, addToCart }) => {
    return (
      <div className="product">
        <img src={product.image} alt={product.name} style={{ width: '200px', height: '200px' }} />
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    );
  };
  
const ShoppingCart = ({ cart, removeFromCart }) => {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <p>{item.name} - ${item.price}</p>
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [cart, setCart] = useState([]);
  
  const products = [
    { id: 1, name: 'Product 1', price: 10, image: s1 }, // Use s1 instead of product1.jpg
    { id: 2, name: 'Product 2', price: 15, image: s2 }, // Use s2 instead of product2.jpg
    { id: 3, name: 'Product 3', price: 20, image: s3 },
    { id: 4, name: 'Product 4', price: 20, image: s4 },
    { id: 5, name: 'Product 5', price: 20, image: s5 },
    { id: 6, name: 'Product 6', price: 20, image: s6 } // Use s3 instead of product3.jpg
    // Add more products similarly with other s images
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter(item => item.id !== productToRemove.id));
  };

  return (
    <div className="app1">
      <h1>E-commerce Store</h1>
      <Banner />
      <div className="products">
        {products.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <div className="products">
        {products.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
