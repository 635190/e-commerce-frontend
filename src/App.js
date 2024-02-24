// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './customer/Pages/HomePage';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation';
import Order from './customer/components/Order/Order';
import OrderDetail from './customer/components/Order/OrderDetail';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import CostomerRouter from './Routers/CostomerRouter';

function App() {
  return (
    <div className="">

    <Routes>
      <Route path='/*' element={<CostomerRouter/>}></Route>
    </Routes>
    

   
    </div>
  );
}

export default App;
