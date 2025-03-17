import React, { useEffect } from 'react';
import axios from 'axios';
import { useLoaderData, useNavigate} from 'react-router-dom';

export async function userLoader({params}){
 
    const response=await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    console.log(response.data)
    return response.data



}  

const Users = () => {
  const user=useLoaderData();
  const navigate=useNavigate();
  useEffect(()=>{
    if(user?.error){
      navigate("/notfound");
    }
  },[user,navigate])
  return (
    <div style={{
      backgroundImage:"url('https://img.freepik.com/premium-vector/online-shopping-digital-technology-with-icon-blue-background-ecommerce-online-store-marketing_252172-219.jpg')",
      minHeight:'100vh',
      backgroundRepeat:'no-repeat',
      backgroundSize:'100% 100%',
      color:'white',
    }}>
      <h1>User details</h1>

      <div style={{
        marginLeft: '50px',
        display:'flex',
        justifyContent:'center',
        flexDirection:'column'    }}>
      <div style={{
        display: 'flex',
        justifyContent:'space-evenly' ,
        color:'white'    }}>
      <p>User ID:</p><span >{user?.name}</span></div>
      <div style={{
        display: 'flex',
        justifyContent:'space-evenly' ,
        color:'white'    }}>
      <p>User email:</p><span>{user?.email}</span></div>
      <div style={{
        display: 'flex',
        justifyContent:'space-evenly',
        color:'white'    }}>
      <p>User Website:</p><span>{user?.website}</span></div>

      </div>
      
    </div>

  )
}

export default Users
