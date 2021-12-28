import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { LocalStorageService } from "./services";

import Converter from "./views/Converter";
import Transactions from "./views/Transactions";
import TransactionDetails from "./views/TransactionDetails";
import Navigation from "./views/Navigation";

const transactionKey = "transactions";

function App() {
  const navigate = useNavigate();
  const [transactions, setTransaction] = useState(
    (LocalStorageService.hasKey(transactionKey),
    LocalStorageService.getItem(transactionKey)) || []
  );

  const newTransactionHandler = (newTransaction) => {
    setTransaction((t) => [newTransaction, ...t]);
  };

  const removeTransactionHandler = (tId) => {
    setTransaction((oldTransactions) =>
      oldTransactions.filter((t) => t.id !== tId)
    );

    navigate("/transactions");
  };

  const sendTransactionHandler = ({ transactionId, bankAccount }) => {
    setTransaction((oldTransactions) =>
      oldTransactions.map((t) =>
        t.id === transactionId ? { ...t, bankAccount, isSent: true } : t
      )
    );

    navigate("/transactions");
  };

  useEffect(() => {
    LocalStorageService.setItem(transactionKey, transactions);
  }, [transactions]);

  return (
    <div className="flex flex-col h-full w-full">
      <div className="relative flex items-center flex-grow overflow-y-hidden">
        <Routes>
          <Route
            path="/"
            element={<Converter onNewTransaction={newTransactionHandler} />}
          />

          <Route
            path="transactions"
            element={<Transactions items={transactions} />}
          />

          <Route
            path="transactions/:transactionId"
            element={
              <TransactionDetails
                items={transactions}
                onRemove={removeTransactionHandler}
                onSend={sendTransactionHandler}
              />
            }
          />
        </Routes>
      </div>

      <Navigation />
    </div>
  );
}

export default App;
