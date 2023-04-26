import "./App.css";
import Navbar from "./comps/NavbarComponent/Navbar";
import Home from "./comps/HomeComponent/Home";
import Service from "./comps/ServicesHomeComponent/Service";
import Contacts from "./comps/ContactComponent/Contact";
import { Navigate, Route, Routes } from "react-router";
import Results from "./comps/ResultsComponent/Results";
import Auth from "./comps/Auth/Auth";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Service />
            </>
          }
        />
        <Route path="/results" element={<Results />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* <Contacts /> */}
    </>
  );
}

export default App;
