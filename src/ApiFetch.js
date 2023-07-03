import { useEffect, useState } from 'react';

function ApiFetch() {
  const [currencyFetch, setCurrencyFetch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
      .then((response) => response.json())
      .then((usefulData) => {
        console.log(usefulData);
        setLoading(false);
        setError(null);
        setCurrencyFetch(...[usefulData]);
      })
      .catch((e) => {
        console.error(`an error coccured: ${e}`);
      });
  }, []);

  return { currencyFetch, setCurrencyFetch, loading, error };
}

export default ApiFetch;
