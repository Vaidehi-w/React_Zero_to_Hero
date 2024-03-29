import React from 'react';

// Sample data for products
const products = [
  { id: 1, name: 'Product 1', price: '$10' },
  { id: 2, name: 'Product 2', price: '$20' },
  { id: 3, name: 'Product 3', price: '$30' },
];

// Product component to display each product card
const ProductCard = ({ product }) => (
  <div className="product-card">
    <h3>{product.name}</h3>
    <p>{product.price}</p>
  </div>
);

// ProductList component to display all product cards
const ProductList = ({ products }) => (
  <div className="product-list">
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

// Header component
const Header = () => (
  <header>
    <h1>Product Display Page</h1>
  </header>
);

// Footer component
const Footer = () => (
  <footer>
    <button>Click me</button>
  </footer>
);

// Main component combining Header, ProductList, and Footer
const ProductDisplayPage = () => (
  <div className="product-display-page">
    <Header />
    <ProductList products={products} />
    <Footer />
  </div>
);

export default ProductDisplayPage;
