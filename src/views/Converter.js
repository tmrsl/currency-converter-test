import { useState, useEffect } from "react";

import AppInput from "../components/AppInput";
import AppSelect from "../components/AppSelect";
import AppButton from "../components/AppButton";

const Converter = (props) => {
  const [sendQty, setSendQty] = useState("");
  const [sendCurrency, setSendCurrency] = useState(props.baseCurrency);

  const [receiveQty, setReceiveQty] = useState("");
  const [receiveCurrency, setReceiveCurrency] = useState(props.baseCurrency);

  useEffect(() => {
    const newReceiveQty = sendQty * props.currencies[receiveCurrency] || "";

    setReceiveQty(newReceiveQty);
  }, [sendQty, sendCurrency, receiveCurrency, props.currencies]);

  // useEffect(() => {
  //   const newSendQty = receiveQty / props.currencies[receiveCurrency];

  //   setSendQty(newSendQty);
  // }, [props.currencies, receiveCurrency, receiveQty]);

  const sendQtyHandler = (value) => {
    setSendQty(Number(value));
  };

  const sendCurrencyHandler = (value) => {
    setSendCurrency(value);
    props.onCurrencyChange(value);
  };

  const receiveQtyHandler = (value) => {
    setReceiveQty(Number(value));
  };

  const receiveCurrencyHandler = (value) => {
    setReceiveCurrency(value);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();

    const newTransaction = {
      sendQty,
      sendCurrency,
      receiveQty,
      receiveCurrency,
      date: new Date(),
    };

    props.onNewTransaction(newTransaction);

    setSendQty("");
    setReceiveQty("");
  };

  return (
    <div className="w-full">
      <form onSubmit={submitHandler}>
        <p className="text-slate-800 text-lg">Send</p>
        <div className="flex w-full mb-4">
          <AppInput
            placeholder="1000"
            required={true}
            value={sendQty}
            onChange={sendQtyHandler}
          />
          <AppSelect
            value={sendCurrency}
            items={Object.keys(props.currencies)}
            onChange={sendCurrencyHandler}
          />
        </div>
        <p className="text-slate-800 text-lg">Receive</p>
        <div className="flex w-full mb-14">
          <AppInput
            placeholder="1000"
            required={true}
            value={receiveQty}
            onChange={receiveQtyHandler}
          />
          <AppSelect
            value={receiveCurrency}
            items={Object.keys(props.currencies)}
            onChange={receiveCurrencyHandler}
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
