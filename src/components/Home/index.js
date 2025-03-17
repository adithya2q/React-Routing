import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home= () => {
  const [userId,setUserId]=useState('');
  const navigate=useNavigate();

  const handleclick=(e)=>{
    e.preventDefault();
    navigate(`/users/${userId}`)
  }
  return (
    <div style={{
      backgroundImage:"url('https://img.freepik.com/premium-vector/online-shopping-digital-technology-with-icon-blue-background-ecommerce-online-store-marketing_252172-219.jpg')",
      minHeight:'100vh',
      backgroundRepeat:'no-repeat',
      backgroundSize:'100% 100%'
    }}>
    <h1 style={{
      color:'white'
    }}>Search User</h1>
    <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }}>
    <input 
    type='number'
    placeholder='enter the user Id'
    value={userId}
    onChange={(e)=>setUserId(e.target.value)}
    required
    />
    <button className='btn btn-success p-2 m-3' onClick={handleclick}>Search user by ID</button>
    </div>
    </div>
    
  )
}

export default Home
