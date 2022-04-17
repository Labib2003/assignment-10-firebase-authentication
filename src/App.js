import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/HomePage/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
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
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
