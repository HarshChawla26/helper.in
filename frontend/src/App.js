import "./App.css";
import Navbar from "./comps/NavbarComponent/Navbar";
import Home from "./comps/HomeComponent/Home";
import Service from "./comps/ServicesHomeComponent/Service";
import Profile from './comps/ProfileComponent/Profile'
import Contacts from "./comps/ContactComponent/Contact";
import { Navigate, Route, Routes } from "react-router";
import Results from "./comps/ResultsComponent/Results";
import Auth from "./comps/Auth/Auth";
import { ToastContainer } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import resultcontext from "./context/resultContext/resultcontext";
import Cart from "./comps/CartComponent/Cart";
import AuthContext from "./context/AuthContext/authContext";

function App() {
  const user = useContext(AuthContext);
  const [isTech, setisTech] = useState(sessionStorage.getItem('userType'))
  
  useEffect(() => {
    if(sessionStorage.getItem('userType')&&sessionStorage.getItem('userType')==='technician'){
      setisTech(true)
    }else{
      setisTech(false)
    }
  }, [])
  
  const result = useContext(resultcontext);
  useEffect(() => {
    result.fetchcities()
     // eslint-disable-next-line
  }, [sessionStorage.getItem('cities')])
  
  if(sessionStorage.getItem('userType')&&sessionStorage.getItem('userType')==='technician'){
    return (
      <>
        <Navbar />
        <Routes>
            <>
            <Route
              path="/profile/*"
              element={<Profile />}/>            
            <Route path="*" element={<Navigate to="/profile/*" />} />
          </>
        </Routes>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        {/* <Contacts /> */}
      </>
    );
  }
  return (
    <>
      <Navbar />
      <Routes>
          <>
          <Route
            path="/"
            element={<><Home /><Service /><Contacts /></>}/>
          <Route path='/results' element={<><Results/><Contacts /></>}></Route>
          <Route path="/auth/*" element={<Auth />} />
          <Route path='/profile/*' element={<Profile/>}/>
          <Route path='/cart' element={<Cart/>}/>
          
          <Route path="*" element={<Navigate to="/" />} />
        </>
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {/* <Contacts /> */}
    </>
  );
}

export default App;
