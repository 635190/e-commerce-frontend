import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${2}`)} className='p-5 shadow-black shadow-white hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/k4d27ww0/shirt/q/w/t/l-el024-el-senor-original-imafnadnjp5pq6tg.jpeg?q=70" alt="" />

                    <div className='ml-5 space-y-2'>
                        <p>Men Regular Fit Solid Cut Away Collar Formal Shirt</p>
                        <p className='opacity-50 text-xs font-semibold'>Size:L</p>
                        <p className='opacity-50 text-xs font-semibold'>Color:White</p>
                    </div>
                </div>
            </Grid>

            <Grid item xs={2}>
                <p>₹799</p>
            </Grid>

            <Grid item xs={4}>
                {true && <div>
                    <p>
                <AdjustIcon sx={{width:"15px",height:"15px"}} className=' text-green-600 mr-2 text-sm'/>
                    <span>
                        Delivered On March 03   
                    </span>
                </p>
                <p className=' text-xs'>
                    Your Item Has Been Delivered
                </p>
                </div> }
                
                {false && <p>
                    <span>
                        Expected Delivered On March 03   
                    </span>
                </p>}
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard