import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);

  const handleSearch = async () => {
    const res = await axios.get(`http://localhost:3000`);
    const filteredProducts = res.data.cakes.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  return (
    <div>
      <input type="text" placeholder="Search products" onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Search;
