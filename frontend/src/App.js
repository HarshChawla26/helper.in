import './App.css';
import Navbar from './comps/NavbarComponent/Navbar';
import Home from './comps/HomeComponent/Home';
import Service from './comps/ServicesHomeComponent/Service';
import Contacts from './comps/ContactComponent/Contact';
import { Route, Routes } from 'react-router';
import Results from './comps/ResultsComponent/Results';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<><Home/><Service /></>}></Route>
        <Route path='/results' element={<Results/>}></Route>
      </Routes>
        
        <Contacts />
    </>
  );
}

export default App;
