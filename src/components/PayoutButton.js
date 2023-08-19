import React from 'react'
import axios from 'axios'
import {URL } from '../constants'
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';

const PayoutButton = ({cartItems}) => {
  const dispatch=useDispatch()
    const handleCheckOut=()=>{

      
        console.log("Hello handlecheckout")
        const userId=localStorage.getItem('userId')
        console.log(cartItems)
        axios.post(`${URL}/create-checkout-session`,{
          cartItems,
          userId
        }).then((res)=>{
          if(res.data.url){
           
            dispatch(clearCart());
            window.location.href=res.data.url
          }
        }).catch(e=>console.log(e.message))

        
    }
  return (
   <>
    <button className="btn btn-primary px-5" type="button" onClick={()=>handleCheckOut()}>CheckOut</button>
   </>
  )
}

export default PayoutButton