import React from 'react'
import AddressCard from '../AdressCard/AddressCard'
import OrderTraker from './OrderTraker'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetail = () => {
    return (

        <div className='px:5 lg:px-20'>
            <div>
                <h1 className=' font-bold text-xl py-7'>Delivery Address</h1>
                <AddressCard />
            </div>

            <div className='py-20'>
                <OrderTraker activeStep={2} />
            </div>

            <Grid className=' space-y-5' container>

            {[1,1,1,1,1,1].map((item)=> <Grid item container className=' shadow-xl rounded-md p-5 border' sx={{ alignItems: "center", justifyContent: "space-between" }}>

                    <Grid item xs={6}>

                        <div className='flex items-center space-x-4'>
                            <img className='w-[8rem] h-[8rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/lehenga-choli/y/g/m/l-sleeveless-shset95222-shae-by-sassafras-original-imaggjzkwyyyezzg.jpeg?q=70" alt="" />

                            <div className=' space-y-2 ml-5'>
                                <p className=' font-semibold'>Printed Stitched Lehenga Choli</p>
                                <p className=' space-x-5 opacity-50 text-xs font-semibold'><span>Coloe : Grey</span> <span>Size : XL</span></p>
                                <p>Seller : Trivety</p>
                                <p>₹2,069</p>
                            </div>
                        </div>

                    </Grid>

                    <Grid item>
                        <Box sx={{color:deepPurple[500]}}>

                        <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2'/>
                        <span>Rate & Review Product</span>


                        </Box>
                    </Grid>
                </Grid>)}

               

            </Grid>
        </div>
    )
}

export default OrderDetail