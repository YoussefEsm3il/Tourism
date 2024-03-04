
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './js/Components/Navbar';
import Home from './js/Components/Home';
import Gallery from './js/Pages/Gallery';
import About from './js/Pages/About';
import Contact from './js/Pages/Contact';
import Footer from './js/Components/Footer';
import Login from './js/Pages/Login';
import Rigestar from './js/Pages/Rigestar';
import Error from './Error';
import Video from './js/Components/Video';
import Trips from './js/Pages/Trips';
import Recordings from './js/Pages/Recordings';
import DiscoverEgypt from './js/Pages/DiscoverEgypt';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Rigestar/>}/>
        <Route path='/trips' element={<Trips/>}/>
        <Route path='/recordings' element={<Recordings/>}/>
        <Route path='/discover-egypt' element={<DiscoverEgypt/>}/>
        <Route path='/video' element={<Video/>  }/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
