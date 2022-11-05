import React from 'react';
import './App.css';
import {AuthProvider} from "./context/auth-context";
import NavBar from './components/NavBar/nav-bar';
import Navigation from "./navigation/navigation";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <NavBar/>
        <Navigation/>
      </AuthProvider>
    </div>
  );
}

export default App;
