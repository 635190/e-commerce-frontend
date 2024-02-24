import { Avatar, Rating } from '@mui/material'
import { Box } from '@mui/system'
import Grid from '@mui/system/Unstable_Grid/Grid'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
        <Grid container spacing={2} gap={3}>
            <Grid item xs={1}>
              <Box>
                <Avatar className=' text-white' sx={{width:56,height:56,bgcolor:"#7d4adb"}}>R</Avatar>
              </Box>
            </Grid>

            <Grid item xs={9}>
                <div className=' space-y-2'>
                    <div>
                        <p className=' font-semibold text-lg'>Raam</p>
                        <p className=' opacity-70'>October 10,2022</p>
                    </div>
                </div>

                <Rating value={4.5} name='half-rating' readOnly precision={.5}/>
                <p>Nice Product, I Love This Shirt</p>
            </Grid>
        </Grid>

    </div>
  )
}

export default ProductReviewCard