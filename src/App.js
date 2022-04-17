import './App.css';
import Home from './Pages/HomePage/Home/Home';
import Navbar from './SharedPages/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
