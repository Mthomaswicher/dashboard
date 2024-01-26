import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardContainer from './components/DashboardContainer';
import Clock from 'react-clock';
import { HashRouter as Router, Link, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<DashboardContainer props={Clock}/>}/>

      </Routes>
      {/* <DashboardContainer props={Clock}/> */}

    </div>
  );
}

export default App;
