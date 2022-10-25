import React from 'react';
import './App.css';
import Home from "./pages/Home/home";
import { Routes, Route } from "react-router-dom";
import SetPage from "./pages/SetPage/set-page";
import { AuthProvider } from "./context/auth-context";
import CreateOrEdit from "./utils/CreateOrEdit/create-or-edit";
import TestPage from "./pages/TestPage/test-page";
import NavBar from './components/NavBar/nav-bar';


function App() {
  return (
      <div className="App">
        <AuthProvider>
          <NavBar/>
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
