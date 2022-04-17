import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Pages/AboutMe/AboutMe';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/HomePage/Home/Home';
import Login from './Pages/Login/Login';
import PageNotFound from './Pages/PageNotFound';
import Register from './Pages/Register/Register';
import RequireAuth from './RequireAuth/RequireAuth';
import Navbar from './SharedPages/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div className='sticky top-0 z-10'>
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<AboutMe></AboutMe>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/checkout' element={<RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
