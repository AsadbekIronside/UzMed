import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Body from './components/partials/body/Body';
import Footer from './components/partials/footer/Footer';
import Header from './components/partials/header/Header';
import Nav from './components/partials/body-nav/Nav';
import FindDoctor from './components/partials/find-doctor/FindDoctor';

function App() {
  return (
    <Router>
      <Header/>
      <Nav/>
       <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='/find-doctor' element={<FindDoctor/>}/>
       </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
