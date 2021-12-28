import { useState, useEffect } from "react";
import { http } from "../utils";

import AppInput from "../components/AppInput";
import AppSelect from "../components/AppSelect";
import AppButton from "../components/AppButton";

const BASE_URL = "https://freecurrencyapi.net/api/v2/latest?";
const API_KEY = "a19652b0-63e5-11ec-84e4-c18806f5efbf";

const Converter = (props) => {
  const [sendQty, setSendQty] = useState("");
  const [sendCurrency, setSendCurrency] = useState();

  const [receiveQty, setReceiveQty] = useState("");
  const [receiveCurrency, setReceiveCurrency] = useState(props.baseCurrency);

  const [currencies, setCurrencies] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchCurrencies = (base_currency = "USD", isFirsTime = false) => {
    setIsLoading(true);

    http(BASE_URL, { apikey: API_KEY, base_currency })
      .then(({ data, query: { base_currency } }) => {
        setCurrencies({ [base_currency]: 1, ...data });
        setSendCurrency(base_currency);

        isFirsTime && setReceiveCurrency(base_currency);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const newReceiveQty = sendQty * currencies[receiveCurrency] || "";

    setReceiveQty(newReceiveQty);
  }, [sendQty, sendCurrency, receiveCurrency, currencies]);

  // useEffect(() => {
  //   const newSendQty = receiveQty / props.currencies[receiveCurrency];

  //   setSendQty(newSendQty);
  // }, [props.currencies, receiveCurrency, receiveQty]);

  useEffect(() => {
    fetchCurrencies("USD", true);
  }, []);

  const sendCurrencyHandler = (value) => {
    setSendCurrency(value);
    fetchCurrencies(value);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();

    const newTransaction = {
      sendQty,
      sendCurrency,
      receiveQty,
      receiveCurrency,
      date: new Date(),
      id: Date.now(),
    };

    props.onNewTransaction(newTransaction);

    setSendQty("");
    setReceiveQty("");
  };

  return (
    <div className="w-full px-4">
      {isLoading && (
        <div className="absolute flex items-center justify-center inset-0 bg-slate-500 bg-opacity-60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="animate-spin h-10 w-10 text-"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </div>
      )}

      <form onSubmit={submitHandler}>
        <p className="text-slate-800 text-lg">Send</p>
        <div className="flex w-full mb-4">
          <AppInput
            placeholder="1000"
            required={true}
            value={sendQty}
            onChange={(v) => setSendQty(Number(v))}
          />
          <AppSelect
            value={sendCurrency}
            items={Object.keys(currencies)}
            onChange={sendCurrencyHandler}
          />
        </div>
        <p className="text-slate-800 text-lg">Receive</p>
        <div className="flex w-full mb-14">
          <AppInput
            placeholder="1000"
            required={true}
            value={receiveQty}
            onChange={(v) => setReceiveQty(Number(v))}
          />
          <AppSelect
            value={receiveCurrency}
            items={Object.keys(currencies)}
            onChange={(v) => setReceiveCurrency(v)}
          />
        </div>

        <div className="w-full text-center">
          <AppButton type="submit">Create transaction</AppButton>
        </div>
      </form>
    </div>
  );
};

export default Converter;
