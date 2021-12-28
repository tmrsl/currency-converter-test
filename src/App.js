import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { http } from "./utils";

import Converter from "./views/Converter";
import Transactions from "./views/Transactions";
import TransactionDetails from "./views/TransactionDetails";
import Navigation from "./views/Navigation";

function App() {
  const BASE_URL = "https://freecurrencyapi.net/api/v2/latest?";
  const API_KEY = "a19652b0-63e5-11ec-84e4-c18806f5efbf";

  const [transactions, setTransaction] = useState([]);
  const [currencies, setCurrencies] = useState({});
  const [baseCurrency, setBaseCurrency] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchCurrencies = (base_currency = "USD") => {
    setIsLoading(true);

    http(BASE_URL, { apikey: API_KEY, base_currency })
      .then(({ data, query: { base_currency } }) => {
        setCurrencies({ [base_currency]: 1, ...data });
        setBaseCurrency(base_currency);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const newTransactionHandler = (newTransaction) => {
    setTransaction((t) => [newTransaction, ...t]);
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex items-center flex-grow overflow-y-hidden">
        <Routes>
          <Route
            path="/"
            element={
              <Converter
                currencies={currencies}
                baseCurrency={baseCurrency}
                onCurrencyChange={fetchCurrencies}
                onNewTransaction={newTransactionHandler}
              />
            }
          />

          <Route
            path="transactions"
            element={<Transactions items={transactions} />}
          />

          <Route
            path="transactions/:transactionId"
            element={<TransactionDetails />}
          />
        </Routes>
      </div>

      <Navigation />
    </div>
  );
}

export default App;
