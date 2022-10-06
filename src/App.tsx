import React, {useState} from 'react';
import './App.css';
import Home from "./pages/Home/home";
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header/header";
import Create from "./pages/Create/create";
import MainSet from "./pages/MainSet/main-set";
import {AuthProvider} from "./context/auth-context";
import SideBar from "./components/SideBar/side-bar";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <div className="App">
        <AuthProvider>
          <Header toggle={toggle}/>
          <SideBar isOpen={isOpen} toggle={toggle}/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/:id" element={<MainSet/>}/>
          </Routes>
        </AuthProvider>
      </div>
  );
}

export default App;
