/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CurrencyExchanger from './Context/Context';
import Wallet from './pages/Wallet/Wallet';
import Accounts from './pages/Accounts/Accounts';

function App() {
  const [currency1, setCurrency1] = useState(100);
  const [currency2, setCurrency2] = useState(500);
  const [currency3, setCurrency3] = useState(10000);
  return (
    <div className="App">
      <CurrencyExchanger.Provider
        value={{
          setCurrency1,
          setCurrency2,
          setCurrency3,
          currency1,
          currency2,
          currency3,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Wallet />} />
            <Route path="/account" element={<Accounts />} />
          </Routes>
        </BrowserRouter>
      </CurrencyExchanger.Provider>
    </div>
  );
}

export default App;
