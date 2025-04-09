import React from 'react'
import { useSelector } from 'react-redux'
import Counter from '../Counter'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeProduct } from '../slices/cartSlice';

const Cart = () => {
  const cartItems= useSelector((state) => state.cart.value);
  const quantities = useSelector((state) => state.counter.cart);
  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, product) => {
    const quantity = quantities[product.id] || 0;
    return total + product.price * quantity;
  }, 0);
  const handleViewProduct = (id) => {
    navigate(`/ProductDetails/${id}`);
  };

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  }
  return (
    <div>
      <h1>Cart</h1>
      <div className='row'>
      {cartItems.map((product)=>(
   <Card className='card h-70 col-sm-12 col-md-6 col-lg-4' style={{ 
    width: '18rem',
    margin:'1rem',
    marginTop:'1rem'
}}>
  <Card.Img variant="top" src={product.Image} alt='Product image'
/>
  <Card.Body>
    <Card.Title>{product.productName}</Card.Title>
    <Card.Text>
        Id:{product.id}
    </Card.Text>
    <Card.Text>
        Price:Rs{product.price}
        </Card.Text>
        <Card.Text>
        Category:{product.Category}

        </Card.Text>
        <Button variant="primary" onClick={() => handleViewProduct(product.id)}>
                View Product
              </Button>
        <div><Counter pricePerItem={product?.price}
        productId={product?.id} 
        /></div>
        <Button variant="danger" onClick={() => handleRemoveProduct(product.id)}>
                Remove from Cart
              </Button>

  </Card.Body>
</Card>

        ))}

      </div>
      <h3>Total Price:{totalPrice}</h3>
    </div>
  )
}

export default Cart
