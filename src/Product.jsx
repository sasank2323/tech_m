import { useState, useEffect } from "react";

function Product({ title }) {
  const [products, setProducts] = useState([]); // State to store multiple products
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = [];
        for (let i = 1; i <= 5; i++) { // Fetch data for product IDs 1 to 5
          const response = await fetch(`https://fakestoreapi.com/products/${i}`);
          if (!response.ok) {
            throw new Error(`Failed to fetch product data for ID ${i}`);
          }
          const data = await response.json();
          fetchedProducts.push(data);
        }
        setProducts(fetchedProducts); // Set the fetched products
        setLoading(false); // Set loading to false
      } catch (err) {
        setError(err.message); // Handle errors
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures this runs only once

  if (loading) {
    return <p>Loading...</p>; // Show loading message while fetching
  }

  if (error) {
    return <p>Error: {error}</p>; // Show error message if fetching fails
  }

  return (
    <div className="products">
      <h2>{title}</h2>
      {products.map((product) => (
        <div key={product.id} className="product">
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Product;