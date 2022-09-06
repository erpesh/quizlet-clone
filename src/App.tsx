import React from 'react';
import './App.scss';
import HomePage from "./pages/HomePage";
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;