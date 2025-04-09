import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { useDispatch } from 'react-redux';
import { addProduct } from '../slices/cartSlice';


const Cards = ({id,ProductName,price,Category,Image}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const product = {
      id,
      ProductName,
      price,
      Category,
      Image,
    };
    dispatch(addProduct(product)); 
  };
  

  return (
    <div>
    <Card className='card h-70' style={{ 
        width: '18rem',
        margin:'1rem',
        marginTop:'1rem'
 }}>
      <Card.Img variant="top" src={Image} alt='Product image'
/>
      <Card.Body>
        <Card.Title>{ProductName}</Card.Title>
        <Card.Text>
            Id:{id}
        </Card.Text>
        <Card.Text>
            Price:{price}
            </Card.Text>
            <Card.Text>
            Category:{Category}
            </Card.Text>
            <Nav.Link as={NavLink} to = {`ProductDetails/${id}`}>
            <Button variant="primary">View Product</Button>
            </Nav.Link>
            
            <Button variant="warning" onClick={handleAddToCart} style={{display: 'flex', marginTop:'10px'}} >Add to Cart</Button>

      </Card.Body>
    </Card>


    </div>
  )
}

export default Cards
