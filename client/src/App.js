import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Body from './components/partials/body/Body';
import Footer from './components/partials/footer/Footer';
import Header from "./components/partials/header/Header";
import Nav from './components/partials/body-nav/Nav';
import FindDoctor from './components/pages/find-doctor/FindDoctor';
import Doctors from './components/pages/doctors/Doctors';
import ServerError from './components/pages/505/ServerError';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<><Header/><Nav/><Body/><Footer/></>}/>
        <Route path='/find-doctor' element={<><Header/><Nav/><FindDoctor/><Footer/></>} />
        <Route path='/find-doctor/doctors-list' element={<><Header/><Nav/><Doctors/><Footer/></>} />
        <Route path='/error-500' element={<ServerError />} />
      </Routes>
    </Router>
  );
}

export default App;
