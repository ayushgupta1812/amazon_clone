import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import CheckoutProduct from './CheckoutProduct';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={ <> <Header /><Home /> </>} />
          <Route path="/checkout"  element={ <Checkout /> }/>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
