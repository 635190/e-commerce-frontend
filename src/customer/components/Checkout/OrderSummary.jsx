import React, { useEffect } from 'react'
import AddressCard from '../AdressCard/AddressCard'
import { Button } from '@mui/material'
import Cartitem from '../Cart/Cartitem'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getOrderById } from '../../../State/Order/Action'
import { store } from '../../../State/Store'
import { createPayment } from '../../../State/Payment/Action'

const OrderSummary = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { order } = useSelector(store => store);
    const searchParams = new URLSearchParams(location.search);
    const orderId = searchParams.get("order_id")

    useEffect(() => {
        dispatch(getOrderById(orderId))
    }, [orderId])
    console.log("orderId", orderId)

    const handleCheckout=()=>{
        dispatch(createPayment(orderId))
    }

    return (
        <div>
            <div className='p-5 shodow-lg rounded-s-md border'>
                <AddressCard address={order.order?.shippingAddress} />
            </div>
            <div>


                <div className='lg:grid grid-cols-3 relative'>
                    <div className=' col-span-2'>
                        {order.order && order.order.orderItems ? (
                            order.order.orderItems.map((item) => (
                                <Cartitem item={item} />
                            ))
                        ) : (
                            <p>No items in the order</p>
                        )}
                    </div>



                    <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                        <div className='border'>
                            <p className=' uppercase font-bold opacity-60 pb-4'>Price details</p>
                            <hr />

                            <div className=' space-y-3 font-semibold pb-10'>

                                <div className='flex justify-between pt-3 text-black'>
                                    <span>Price</span>
                                    <span>₹{order.order?.totalPrice}</span>
                                </div>

                                <div className='flex justify-between pt-3'>
                                    <span>Disccount</span>
                                    <span className='text-green-600'>-₹{order.order?.discounte}</span>
                                </div>

                                <div className='flex justify-between pt-3 '>
                                    <span>Delivery Charge</span>
                                    <span className='text-green-600'>Free</span>
                                </div>

                                <div className='flex justify-between pt-3 font-bold'>
                                    <span>Totle Amount</span>
                                    <span className='text-green-600'>₹{order.order?.totalDiscountedPrice}</span>
                                </div>

                            </div>

                            <Button variant='contained' className=' w-full' sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#7d4adb" }} onClick={handleCheckout}>
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