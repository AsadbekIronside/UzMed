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
import CartBody from './components/pages/good-cart/cart-body/CartBody';
import CartLayout from './components/pages/good-cart/cart-layout/CartLayout';
import Layout from './components/partials/Layout/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Body/>}/>
          <Route path='/find-doctor' element={<FindDoctor/>} />
          <Route path='/find-doctor/doctors-list' element={<Doctors/>} />
        </Route>
        <Route path='/error-500' element={<ServerError />}/>
        <Route path='/user-profile/:page' element={<><UserHeader/><UserProfile/></>}/>
        <Route path='/good-cart' element={<CartLayout/>}>
          <Route index element={<CartBody/>}/>
          <Route path='/good-cart/fitnes/:id' element={<CartBody/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
