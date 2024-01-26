import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardContainer from './components/DashboardContainer';
import Clock from 'react-clock';
import { HashRouter as Router, Link, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Route path="/" element={<DashboardContainer props={Clock}/>}>
      {/* <DashboardContainer props={Clock}/> */}

      </Route>
    </div>
  );
}

export default App;
