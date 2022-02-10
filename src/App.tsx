import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from "./Routing";
import './App.scss';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App: FunctionComponent = () => {

  return (
    <div className="app">
      <ToastContainer />
      <Router>
        <Routing/>
      </Router>
    </div>
  );
}

export default App;
