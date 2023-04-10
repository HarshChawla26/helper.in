import './App.css';
import Navbar from './comps/NavbarComponent/Navbar';
import Home from './comps/HomeComponent/Home';
import Service from './comps/ServicesHomeComponent/Service';
import Contacts from './comps/ContactComponent/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Service />
      <Contacts />
    </>
  );
}

export default App;
