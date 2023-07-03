/* eslint-disable react/jsx-no-constructed-context-values */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CurrencyExchanger from './Context/Context';
import Wallet from './pages/Wallet/Wallet';
import Welcome from './pages/welcome/Welcome';
import ApiFetch from './ApiFetch';

function App() {
  const { currencyFetch, setCurrencyFetch, loading, error } = ApiFetch(
    `https://api.exchangerate-api.com/v4/latest/USD`
  );
  console.log(currencyFetch);
  return (
    <div className="App">
      <CurrencyExchanger.Provider
        value={{ currencyFetch, setCurrencyFetch, loading, error }}
      >
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
