import React, {useState} from 'react';
import './App.css';
import Home from "./pages/Home/home";
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header/header";
import SetPage from "./pages/SetPage/set-page";
import {AuthProvider} from "./context/auth-context";
import SideBar from "./components/SideBar/side-bar";
import CreateOrEdit from "./utils/CreateOrEdit/create-or-edit";
import TestPage from "./pages/TestPage/test-page";

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
            <Route path="/create" element={<CreateOrEdit isCreate={true}/>}/>
            <Route path="/:id" element={<SetPage/>}/>
            <Route path="/:id/edit" element={<CreateOrEdit isCreate={false}/>}/>
            <Route path="/:id/test" element={<TestPage/>}/>
          </Routes>
        </AuthProvider>
      </div>
  );
}

export default App;
