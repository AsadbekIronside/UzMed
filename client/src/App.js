import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Body from './components/partials/body/Body';
import Footer from './components/partials/footer/Footer';
import Header from "./components/partials/header/Header";
import Nav from './components/partials/body-nav/Nav';
import FindDoctor from './components/pages/find-doctor/FindDoctor';
import Doctors from './components/pages/doctors/Doctors';
import ServerError from './components/pages/505/ServerError';
import UserHeader from './components/pages/userProfile/UserHeader';
import UserProfile from './components/pages/userProfile/UserProfile';
import CartHeader from './components/pages/good-cart/cart-header/CartHeader';
import CartNav from './components/pages/good-cart/cart-nav/CartNav';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<><Header/><Nav/><Body/><Footer/></>}/>
        <Route path='/find-doctor' element={<><Header/><Nav/><FindDoctor/><Footer/></>} />
        <Route path='/find-doctor/doctors-list' element={<><Header/><Nav/><Doctors/><Footer/></>} />
        <Route path='/error-500' element={<ServerError />}/>
        <Route path='/user-profile/:page' element={<><UserHeader/><UserProfile/></>}/>
        <Route path='/good-cart' element={<><CartHeader/><CartNav/><Footer/></>}/>
      </Routes>
    </Router>
  );
}

export default App;
