
import React from "react";
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.css";


import Header from "./Header";
import About from "./About";
import Welcome from "./Welcome";
import MgtServices from "./MgtServices";
import Footer from "./Footer";
//Simport NavBar from "./NaveBar";


function App() {
  return (
    <div>  
   
    <header className="App-header">
    <Router>
        <Header />
       {/* <NavBar/> */}
       
        
        <About /> 
        <Welcome />
        <MgtServices />  
        <Footer />  
      
    </Router>
       
    </header>
    </div>
    
  );
}
 
export default App;
 
