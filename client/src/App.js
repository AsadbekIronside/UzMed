import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/headerElems/Home/Home'
import About from './components/headerElems/About/About'
import Layout from './components/partials/layout/Layout'

function App() {
  return (
    <Router>
       <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
       </Routes>
    </Router>
  );
}

export default App;
