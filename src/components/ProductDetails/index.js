import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import productData from '../productdata';  
const ProductDetails = () => {
  const { id } = useParams();  // Get productId from the URL
  console.log('Product ID:', id);  
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find the product with the matching ID
    const selectedProduct = productData.find(product => product.id === parseInt(id));
    console.log('Found Product:', selectedProduct);

    setProduct(selectedProduct);
  }, [id]);  // Re-run when productId changes

  // Handle loading or error states
  if (!product) {
    return <div>Product is not found</div>;  // Or display a message if product is not found
  } 

  return (
    <div>
      <h1> Product Data</h1>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: '300px' }} />
      <p>Price: {product.price}</p>
      <p>Category: {product.category}</p>
      <p>Product ID: {product.id}</p>
    </div>
  );
}

export default ProductDetails;

