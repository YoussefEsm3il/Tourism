
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './js/Components/Home';
//admin
import HomeAdmin from './js/Pages/Admin/Home';
import ProfileAdmin from './js/Pages/Admin/Profile';
import LoginAdmin from './js/Pages/Auth/Admin/Login';
import RegistarAdmin from './js/Pages/Auth/Admin/Rigestar';
//user
import HomeUser from './js/Pages/User/Home';
import ProfileUser from './js/Pages/User/Profile';
import LoginUser from './js/Pages/Auth/User/Login';
import RegistarUser from './js/Pages/Auth/User/Registar';
import Services from './js/Pages/User/Services';
import Recordings from './js/Pages/User/Services/Recordings';
import DiscoverEgypt from './js/Pages/User/Services/DiscoverEgypt';
import Trips from './js/Pages/User/Services/Trips';
import Settings from './js/Components/Settings';
import GalleryUser from './js/Pages/User/Gallrey'
import FavoriteUser from './js/Pages/User/Favorite'
import Ticket from './js/Pages/User/Ticket'

import Error from './Error';
import Video from './js/Components/Video';
import Gallery from './js/Pages/Gallery';
// import Test from './Test';

function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        
        
        <Route path='/gallery' element={<Gallery/>}/>

        <Route path='/admin/profile' element={<ProfileAdmin/>}/>
        <Route path='/admin/home' element={<HomeAdmin/>}/>
        <Route path='/admin/login' element={<LoginAdmin/>}/>
        <Route path='/admin/register' element={<RegistarAdmin/>}/>

        <Route path='/user/home' element={<HomeUser/>}/>
        <Route path='/user/profile' element={<ProfileUser/>}/>
        <Route path='/user/login' element={<LoginUser/>}/>
        <Route path='/user/register' element={<RegistarUser/>}/>
        <Route path='/user/services' element={<Services/>}/>
        <Route path='/user/setting' element={<Settings/>}/>
        <Route path='/user/gallery' element={<GalleryUser/>}/>
        <Route path='/user/favorite' element={<FavoriteUser/>}/>
        <Route path='/user/ticket' element={<Ticket/>}/>
        <Route path='/user/trips' element={<Trips/>}/>
        <Route path='/user/recordings' element={<Recordings/>}/>
        <Route path='/user/discover-egypt' element={<DiscoverEgypt/>}/>


        <Route path='/video' element={<Video/>}/>


        {/* <Route path='/test' element={<Test name='mohamed' age='35' address='6 octber  '/>}/> */}

        
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Outlet/>
    </div>
  );
}

export default App;
