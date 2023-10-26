import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Body from './components/partials/body/Body';
import Footer from './components/partials/footer/Footer';
import Header from './components/partials/header/Header';
import Nav from './components/partials/body-nav/Nav';
import FindDoctor from './components/pages/find-doctor/FindDoctor';
import Doctors from './components/pages/doctors/Doctors';

function App() {
  return (
    <Router>
      <Header/>
      <Nav/>
       <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='/find-doctor' element={<FindDoctor/>}/>
        <Route path='/find-doctor/doctors-list' element={<Doctors/>}/>
       </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
