import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/footer/footer";
import Profile from "./Components/Pages/profile";
import AboutUs from "./Components/Pages/AboutUs";
import Slider from "./Components/Slider/Slider";
import Notes from "./Components/Pages/note";
import Cards from "./Components/Cards/Cards";
import Contact from "./Components/Pages/contact";
function App() {
  return (
<div >

     <Navbar/>
     <Slider/>
     <Profile/>
     {/* <Notes/> */}
     <Cards/>
     {/* <AboutUs/> */}
    
     <Contact/>
<Footer/>
    </div>
  );
}

export default App;
