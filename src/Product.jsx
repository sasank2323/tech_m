import { useState, useEffect } from "react";

function Product({title}) {
  const [product, setProduct] = useState(null); // State to store product data
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch data from a fake API
    fetch("https://fakestoreapi.com/products/1") // Example API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data); // Set the fetched product data
        setLoading(false); // Set loading to false
      })
      .catch((err) => {
        setError(err.message); // Handle errors
        setLoading(false);
      });
  }, []); // Empty dependency array ensures this runs only once

  if (loading) {
    return <p>Loading...</p>; // Show loading message while fetching
  }

  if (error) {
    return <p>Error: {error}</p>; // Show error message if fetching fails
  }

  return (
    <div className="product">
      <h2>{title}</h2>
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
}

export default Product;