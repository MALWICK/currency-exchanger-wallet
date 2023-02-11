/* eslint-disable react/jsx-no-constructed-context-values */
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CurrencyExchanger from './Context/Context';
import Wallet from './pages/Wallet/Wallet';
import Welcome from './pages/welcome/Welcome';

function App() {
  const [currencyFetch, setCurrencyFetch] = useState();
  const currencies = async () => {
    const response = await fetch(
      'https://api.apilayer.com/fixer/latest?base=USD&apikey=8El09v1tgPaDSKNR0TGCUrzqXBE6AdDI'
    );
    const data = await response.json();
    setCurrencyFetch(...[data.rates]);
  };

  useEffect(() => {
    currencies();
  }, []);
  return (
    <div className="App">
      <CurrencyExchanger.Provider value={{ currencyFetch, setCurrencyFetch }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/wallet" element={<Wallet />} />
          </Routes>
        </BrowserRouter>
      </CurrencyExchanger.Provider>
    </div>
  );
}

export default App;
