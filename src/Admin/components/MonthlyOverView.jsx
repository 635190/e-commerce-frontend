import { AccountCircle, TrendingUp } from '@mui/icons-material';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import React from 'react'
import { Avatar, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const salesData = [
    {
        state: "245K",
        title: "Sales",
        color: "#e7d68b",
        icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />
    },
    {
        state: "13.5K",
        title: "Customers",
        color: "rgb(35, 203, 93)",
        icon: <AccountCircle sx={{ fontSize: "1.75rem" }} />
    },
    {
        state: "1.54K",
        title: "Products",
        color: "rgb(222, 72, 57)",
        icon: <PhonelinkIcon sx={{ fontSize: "1.75rem" }} />
    },
    {
        state: "88K",
        title: "Revenue",
        color: "#11afe7",
        icon: <PaidOutlinedIcon sx={{ fontSize: "1.75rem" }} />
    },
]


const renderState = () => {
    return salesData.map((item, index) => (
        <Grid item xs={12} sm={3} key={index}>
            <Box sx={{
                display: "flex", alignItems: "center"
            }}>

                <Avatar variant='rounded' sx={{
                    mr: 3,
                    width: 44,
                    height: 44,
                    boxShadow: 3,
                    color: "white",
                    backgroundColor:`${item.color}`
                }}>
                    {item.icon}
                </Avatar>

                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant='caption'>{item.title}</Typography>
                    <Typography variant='h6'>{item.state}</Typography>
                </Box>

            </Box>
        </Grid>
    ))
}


const MonthlyOverView = () => {
    return (
        <Card sx={{bgcolor:"rgb(51, 51, 51)",color:"white"}}>
            <CardHeader title="Monthly Overview"
                action={
                    <IconButton size='small'>
                        <MoreVertOutlinedIcon />
                    </IconButton>
                }
                subheader={
                    <Typography variant='body2'>
                        <Box component="span" sx={{ fontWeight: 600,}}>
                            Total 48.5% groth
                        </Box>
                       😎 This month
                    </Typography>
                }

                titleTypographyProps={{
                    sx:{
                        mb:2.5,
                        lineHeight:"2rem !important",
                        letterSpacing:".15px !important"
                    }
                }}

            />

            <CardContent sx={{pt:theme=>`${theme.spacing(3)} !important`}}>

            <Grid container spacing={[5,0]}>
                {renderState()}
            </Grid>

            </CardContent>

        </Card>
    )
}

export default MonthlyOverView