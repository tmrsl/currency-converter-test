import { useState } from "react";
import { useParams } from "react-router-dom";

import { hasOwn } from "../utils";

import AppButton from "../components/AppButton";
import AppInput from "../components/AppInput";
import TransactionQtyAndCurrency from "../components/transactions/TransactionQtyAndCurrency";

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const TransactionDetails = (props) => {
  const { transactionId } = useParams();

  const [bankAccount, setBankAccount] = useState("");
  const [transaction] = useState(() =>
    props.items.find((t) => String(t.id) === transactionId)
  );

  const isSent = hasOwn(transaction, "isSent");

  const bankAccountHandler = (value) => {
    setBankAccount(value);
  };

  const sendMoneyHandler = (value) => {
    props.onSend({
      transactionId: Number(transactionId),
      bankAccount,
    });
  };

  const removeTransactionHandler = () => {
    props.onRemove(Number(transactionId));
  };

  return (
    <div className="w-full px-4">
      <div className="flex flex-col gap-4 mb-6">
        <div>
          Send:
          <TransactionQtyAndCurrency
            isSend
            qty={transaction.sendQty}
            currency={transaction.sendCurrency}
          />
        </div>
        <div>
          Receive:
          <TransactionQtyAndCurrency
            qty={transaction.receiveQty}
            currency={transaction.receiveCurrency}
          />
        </div>
        <div>
          Date:
          <span>
            {new Date(transaction.date).toLocaleDateString(
              "en-GB",
              dateOptions
            )}
          </span>
        </div>
      </div>

      <p>Bank Account:</p>
      <AppInput
        value={isSent ? transaction.bankAccount : bankAccount}
        onChange={bankAccountHandler}
        placeholder="Enter receive bank account"
        isBank
        readonly={isSent}
      />

      {!isSent && (
        <div className="flex justify-between mt-10">
          <AppButton onClick={sendMoneyHandler}>Send money</AppButton>
          <AppButton onClick={removeTransactionHandler}>Remove</AppButton>
        </div>
      )}
    </div>
  );
};

export default TransactionDetails;
