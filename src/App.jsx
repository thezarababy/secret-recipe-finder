import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './static/Header';
import Footer from './static/Footer';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Student from './pages/Student';
import Breakfast from './pages/Breakfast';
import Special from './pages/Special';
import Fitfam from './pages/Fitfam';
import Register from './pages/Register';
import Login from './pages/Login';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipe' element={<Recipe />} />
        <Route path='/student' element={<Student />} />
        <Route path='/breakfast' element={<Breakfast />} />
        <Route path='/fitfam' element={<Fitfam />} />
        <Route path='/special' element={<Special />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
    
  );
}

export default App