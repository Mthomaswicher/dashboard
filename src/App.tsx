import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardContainer from './components/DashboardContainer';
import Clock from 'react-clock';
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <DashboardContainer props={Clock}/>
    </div>
  );
}

export default App;
