import React, {useState} from 'react';
import './App.css';
import Home from "./pages/Home/home";
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header/header"
import Footer from "./components/Footer"
import Create from "./pages/Create/create";
import MainSet from "./pages/MainSet/main-set";

function App() {

  // const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="App">
      {/*<Header setIsAuth={setIsAuth}/>*/}
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/:id" element={<MainSet/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
