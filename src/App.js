// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CostomerRouter from './Routers/CostomerRouter';
import AdminRouter from './Routers/AdminRouter';

function App() {
  return (
    <div className="">

    <Routes>
      <Route path='/*' element={<CostomerRouter/>}></Route>
      <Route path='/admin/*' element={<AdminRouter/>}></Route>
    </Routes>
    

   
    </div>
  );
}

export default App;
