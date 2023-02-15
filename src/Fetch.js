import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Fetch() {
  const [currencyFetch, setCurrencyFetch] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.apilayer.com/fixer/latest?base=USD&apikey=8El09v1tgPaDSKNR0TGCUrzqXBE6AdDI'
      )
      .then((res) => {
        console.log(res);
        setCurrencyFetch(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div>Fetch</div>;
}

export default Fetch;
