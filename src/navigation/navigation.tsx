import React, {lazy, Suspense} from 'react';
import LoadingSpinner from "../components/LoadingSpinner/loading-spinner";
import {Route, Routes} from "react-router-dom";

const Home = lazy(() => import("../pages/Home/home"));
const SearchPage = lazy(() => import("../pages/SearchPage/search-page"));
const SetPage = lazy(() => import("../pages/SetPage/set-page"));
const TestPage = lazy(() => import("../pages/TestPage/test-page"));
const CreateOrEdit = lazy(() => import("../pages/CreateOrEdit/create-or-edit"));
const FlashCardsPage = lazy(() => import("../pages/FlashCardsPage/flash-cards-page"));
const LearnPage = lazy(() => import("../pages/LearnPage/learn-page"));
const MatchPage = lazy(() => import("../pages/MatchPage/match-page"));


const Navigation = () => {
  return (
    <Suspense fallback={<LoadingSpinner/>}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<CreateOrEdit isCreate={true}/>}/>
        <Route path="/search/:request" element={<SearchPage/>}/>
        <Route path="/set/:id" element={<SetPage/>}/>
        <Route path="/set/:id/edit" element={<CreateOrEdit isCreate={false}/>}/>
        <Route path="/set/:id/test" element={<TestPage/>}/>
        <Route path="/set/:id/flashcards" element={<FlashCardsPage/>}/>
        <Route path="/set/:id/learn" element={<LearnPage/>}/>
        <Route path="/set/:id/match" element={<MatchPage/>}/>
      </Routes>
    </Suspense>
  );
};

export default Navigation;