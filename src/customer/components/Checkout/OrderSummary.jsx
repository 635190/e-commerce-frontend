import React from 'react'
import AddressCard from '../AdressCard/AddressCard'
import { Button } from '@mui/material'
import Cartitem from '../Cart/Cartitem'

const OrderSummary = () => {
  return (
    <div>
      <div className='p-5 shodow-lg rounded-s-md border'>
        <AddressCard/>
      </div>
      <div>
     

<div className='lg:grid grid-cols-3 relative'>
    <div className=' col-span-2'>
        {[1,1,1,1].map((item)=><Cartitem />)}
    </div>

    <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
        <div className='border'>
            <p className=' uppercase font-bold opacity-60 pb-4'>Price details</p>
            <hr />

            <div className=' space-y-3 font-semibold pb-10'>

                <div className='flex justify-between pt-3 text-black'>
                    <span>Price</span>
                    <span>₹699</span>
                </div>

                <div className='flex justify-between pt-3'>
                    <span>Disccount</span>
                    <span className='text-green-600'>-₹359</span>
                </div>

                <div className='flex justify-between pt-3 '>
                    <span>Delivery Charge</span>
                    <span className='text-green-600'>Free</span>
                </div>

                <div className='flex justify-between pt-3 font-bold'>
                    <span>Totle Amount</span>
                    <span className='text-green-600'>₹699</span>
                </div>

            </div>

            <Button variant='contained' className=' w-full' sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#7d4adb" }}>
                Checkout
            </Button>
        </div>
    </div>

</div>

</div>
      </div>
 
  )
}

export default OrderSummary