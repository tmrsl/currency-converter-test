import { useState, useEffect } from "react";
import { http } from "./utils";

import Converter from "./views/Converter";
import Transactions from "./views/Transactions";

function App() {
  const BASE_URL = "https://freecurrencyapi.net/api/v2/latest?";
  const API_KEY = "a19652b0-63e5-11ec-84e4-c18806f5efbf";

  const [tab, setTab] = useState("Converter");
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
    console.log("here");
    fetchCurrencies();
  }, []);

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex items-center flex-grow overflow-y-hidden">
        {!!baseCurrency &&
          (tab === "Converter" ? (
            <Converter
              currencies={currencies}
              baseCurrency={baseCurrency}
              onCurrencyChange={fetchCurrencies}
              onNewTransaction={newTransactionHandler}
            />
          ) : (
            <Transactions items={transactions} />
          ))}
      </div>

      <nav className="flex items-center justify-evenly h-20 w-full bg-stone-50 border border-t-slate-200">
        <button className="text-blue-500" onClick={() => setTab("Converter")}>
          Converter
        </button>
        <button
          className="text-slate-900"
          onClick={() => setTab("Transactions")}
        >
          Transactions
        </button>
      </nav>
    </div>
  );
}

export default App;
