import React, { useState } from "react";
import ProductService from "../services/ProductService";
import ProductListItem from "../components/ProductListItem";

export default function AppProducts() {
  const [products, setProducts] = useState(ProductService.getAll());
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchProducts = (searchTerm) => {
    setSearchTerm(searchTerm);
    setProducts(ProductService.search(searchTerm));
  };

  const handleProductCount = (product) => {
    setProducts(
      products.map((productState) => {
        if (productState.id === product.id) {
          productState.count = product.count;
        }
        return productState;
      })
    );
  };

  const handleIncrementCount = (id) => {
    const product = ProductService.increment(id);
    handleProductCount(product);
  };

  const handleDecrementCount = (id) => {
    const product = ProductService.decrement(id);
    if (product) {
      handleProductCount(product);
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      <p>Search Product</p>
      <input
        value={searchTerm}
        onChange={({ target }) => handleSearchProducts(target.value)}
      />
      {products.map((product) => (
        <ProductListItem
          key={product.id}
          product={product}
          onIncrementCount={handleIncrementCount}
          onDecrementCount={handleDecrementCount}
          // {/* <p>{product.name}</p>
          //<p>Count: {product.count}</p> */}
        />
      ))}
    </div>
  );
}
