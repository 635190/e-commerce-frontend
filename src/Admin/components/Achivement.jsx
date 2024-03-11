import { Button, Card, CardContent, Typography } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'


const TrignleImg=styled("img")({
    right:0,
    bottom:0,
    height:170,
    position:'absolute'
})

const TrophyImg=styled("img")({
    right:36,
    bottom:20,
    height:98,
    position:"absolute",
})

const Achivement = () => {
  return (
    <Card sx={{position:"relative",bgcolor:"rgb(51, 51, 51)",color:"white"}}>
        <CardContent>
            <Typography variant='h6' sx={{letterSpacing:".25px"}}>
                Shop With Parth
            </Typography>
            <Typography variant='body2'>Congratulations</Typography>
            <Typography variant='h5' sx={{my:3}}> 402.8k</Typography>

            <Button size='small' variant='contained'>View sales</Button>

            <TrignleImg src=''></TrignleImg>
            <TrophyImg src='https://www.freeiconspng.com/thumbs/trophy-png/trophy-png-23.png'></TrophyImg>
        </CardContent>
    </Card>
    )
}

export default Achivement