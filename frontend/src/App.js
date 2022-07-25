import React, { Component }  from 'react';
import { BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'
import {Header} from "./components/Header"
import { Watchlist } from './components/Watchlist'
import { Watched } from './components/Watched'
import { Add } from './components/Add'
import './App.css';
import './lib/font-awesome/css/all.min.css'
import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Watched />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
        </Routes>
    </Router>
  );
}

export default App;
