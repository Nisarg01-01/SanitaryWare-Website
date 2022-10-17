import React from 'react'
import { useProdcontext } from '../context/productcontext'

const Cart = () => {
  const name =  useProdcontext();
  return (
    <div>{name}</div>
  )
}

export default Cart