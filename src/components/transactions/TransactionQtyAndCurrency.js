const TransactionQtyAndCurrency = ({ qty, currency, isSend }) => {
  return (
    <span className="inline-flex px-2 overflow-hidden">
      <span className="truncate font-light text-slate-800">{qty}</span>
      <span
        className={
          "ml-2 font-semibold " + (isSend ? "text-blue-400" : "text-orange-400")
        }
      >
        {currency}
      </span>
    </span>
  );
};

export default TransactionQtyAndCurrency;
