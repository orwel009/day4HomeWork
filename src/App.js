// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShopApp from './components/ShopApp';
import AirlineApp from './components/AirlineApp';
import USDataApp from './components/USDataApp';
import UserApp from './components/UserApp';
import UserDummyApp from './components/UserDummyApp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shopapp' element={<ShopApp/>}/>
        <Route path='/airlineapp' element={<AirlineApp/>}/>
        <Route path='/usdataapp' element={<USDataApp/>}/>
        <Route path='/userapp' element={<UserApp/>}/>
        <Route path='/userdummyapp' element={<UserDummyApp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
