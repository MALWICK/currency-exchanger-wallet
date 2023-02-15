/* eslint-disable react/jsx-no-constructed-context-values */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CurrencyExchanger from './Context/Context';
import Wallet from './pages/Wallet/Wallet';
import Welcome from './pages/welcome/Welcome';

function App() {
  const [currencyFetch, setCurrencyFetch] = useState();

  useEffect(() => {
    axios
      .get('https://api.exchangerate-api.com/v4/latest/USD')
      .then((res) => {
        console.log(res);
        setCurrencyFetch(res.data.rates);
        /*   console.log(res.data.rates); */
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <CurrencyExchanger.Provider value={[currencyFetch, setCurrencyFetch]}>
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
