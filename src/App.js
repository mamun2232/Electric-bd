import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navber from './Pages/Home/Navber';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Order from './Pages/Home/Order';
import RequreAuth from './Pages/Login/RequreAuth.js'


function App() {
  return (
    <div className="Ap">
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/order/:id' element={<RequreAuth>
          <Order></Order>
        </RequreAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
