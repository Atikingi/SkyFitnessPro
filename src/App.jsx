import React from 'react';
import './App.css';
import UserProfile from './pages/UserProfile/UserProfile';
// import { MainFitnessPage } from './pages/MainSkyFitnessProPage/MainFitnessProPage';
// import {Login} from "./components/LoginRegistration/Login";
// import {Registration} from "./components/LoginRegistration/Registration";

function App() {
  return (
    <>
      <UserProfile />
      {/* не забыть убрать компонент */}
      {/* <MainFitnessPage />; */}
    </>
  );
}

export default App;
