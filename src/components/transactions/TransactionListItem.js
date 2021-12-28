import TransactionQtyAndCurrency from "./TransactionQtyAndCurrency";

const TransactionListItem = ({
  sendQty,
  sendCurrency,
  receiveQty,
  receiveCurrency,
  onClick,
}) => {
  return (
    <div
      className="grid grid-cols-[1fr_30px_1fr] justify-evenly px-4 py-5 first:border-t border-b border-slate-300"
      onClick={onClick}
    >
      <TransactionQtyAndCurrency isSend qty={sendQty} currency={sendCurrency} />
      <span> > </span>
      <TransactionQtyAndCurrency
        side="receive"
        qty={receiveQty}
        currency={receiveCurrency}
      />
    </div>
  );
};

export default TransactionListItem;
