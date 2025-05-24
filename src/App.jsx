import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { Navbar, Container } from 'react-bootstrap'

import Header from './components/Header'
import Productos from './components/Products';
import Footer from './components/Footer';
import Login from './pages/Login';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import ProdCat1 from './pages/ProdCat1';
import ProdCat2 from './pages/ProdCat2';
import ProtectedRoute from './components/ProtectedRoute';


function App() {

  return (//        
    <BrowserRouter>
      <Header />
      <Routes>
        {/*Rutas no protegidas*/}
        <Route path="/login" element={<Login />} />

        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />

        <Route path="/prodcat1" element={<ProdCat1 />} />
        <Route path="/prodcat2" element={<ProdCat2 />} />
        <Route path="/productos" element={<Productos />} />

        {/*Rutas protegidas*/}
        <Route path="/profile/:id" element={
          <ProtectedRoute><Profile /></ProtectedRoute>
        } />
        <Route path="/admin" element={
          <ProtectedRoute><Admin /></ProtectedRoute>
        } />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
