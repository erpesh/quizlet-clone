import React, {useState} from 'react';
import './App.css';
import Home from "./pages/Home/home";
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header/header";
import Create from "./pages/Create/create";
import MainSet from "./pages/MainSet/main-set";
import {AuthProvider} from "./context/auth-context";

function App() {

  return (
      <div className="App">
        <AuthProvider>
          <Header/>
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
