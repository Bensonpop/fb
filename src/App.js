import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
  
   
   <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route path='/login' element={<Login/>}/>
   <Route path='/signup' element={<Signup/>}/>
   <Route path='/home' element={<Home/>}/>


   </Routes>

   </BrowserRouter>
    </div>
  );
}

export default App;
