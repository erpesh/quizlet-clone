import React, { lazy, Suspense } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/auth-context";
import NavBar from './components/NavBar/nav-bar';
import LoadingSpinner from './components/LoadingSpinner/loading-spinner';

const Home = lazy(() => import("./pages/Home/home"));
const SetPage = lazy(() => import("./pages/SetPage/set-page"));
const TestPage = lazy(() => import("./pages/TestPage/test-page"));
const CreateOrEdit = lazy(() => import("./utils/CreateOrEdit/create-or-edit"));

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <NavBar />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateOrEdit isCreate={true} />} />
            <Route path="/:id" element={<SetPage />} />
            <Route path="/:id/edit" element={<CreateOrEdit isCreate={false} />} />
            <Route path="/:id/test" element={<TestPage />} />
          </Routes>
        </Suspense>
      </AuthProvider>
    </div>
  );
}

export default App;
