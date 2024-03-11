import { Avatar, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { findProducts } from '../../State/Product/Action'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../State/Store'

const ProductTable = () => {
  const dispatch=useDispatch();
  const {products}=useSelector(store=>store);

  console.log("products------------",products)

  useEffect(()=>{
    const data={
      category:"",
      colors: [],
      sizes: [],
      minPrice:0,
      maxPrice:100000,
      minDiscount:0,
      sort:"price_low",
      pageNumber : 0,
      pageSize : 10,
      stock:'',
    }
    dispatch(findProducts(data));
  },[])

  return (
    <div className='p-5'>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Image</TableCell>
          <TableCell align="left">Title</TableCell>
          <TableCell align="left">Category</TableCell>
          <TableCell align="left">Price</TableCell>
          <TableCell align="left">Quantity</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products?.products?.content?.map((item) => (
          <TableRow
            key={item.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="left">
            <Avatar src={item.imageUrl}></Avatar>
            </TableCell>
            <TableCell align='left' scope="row">
              {item.title}
            </TableCell>
            <TableCell align="left">{item.category.name}</TableCell>
            <TableCell align="left">{item.price}</TableCell>
            <TableCell align="left">{item.quantity}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  )
}

export default ProductTable