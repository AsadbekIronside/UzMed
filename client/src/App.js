import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Body from './components/partials/body/Body';
import FindDoctor from './components/pages/find-doctor/FindDoctor';
import Doctors from './components/pages/doctors/Doctors';
import ServerError from './components/pages/505/ServerError';
import UserHeader from './components/pages/userProfile/UserHeader';
import UserProfile from './components/pages/userProfile/UserProfile';
import CartBody from './components/pages/good-cart/cart-body/CartBody';
import CartLayout from './components/pages/good-cart/CartLayout';
import Layout from './components/partials/Layout';
import BookApp from './components/pages/book-app/BookApp';
import AskQuestion from './components/pages/ask-question/AskQuestion';
import News from './components/pages/news/News';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Body />} />
          <Route path='/find-doctor' element={<FindDoctor />} />
          <Route path='/find-doctor/doctors-list' element={<Doctors />} />
          <Route path='/book-app' element={<BookApp/>}/>
          <Route path='/treatment' element={<BookApp/>}/>
          <Route path='/ask-question' element={<AskQuestion/>}/>
          <Route path='/news' element={<News/>}/>
        </Route>
        <Route path='/error-500' element={<ServerError />} />
        <Route path='/user-profile/:page' element={<><UserHeader /><UserProfile /></>} />
        <Route path='/good-cart' element={<CartLayout />}>
          <Route index element={<CartBody />} />
          <Route path='/good-cart/fitnes/:id' element={<CartBody />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
