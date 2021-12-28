import TransactionQtyAndCurrency from "./TransactionQtyAndCurrency";

const TransactionListItem = ({
  sendQty,
  sendCurrency,
  receiveQty,
  receiveCurrency,
  isSent,
  onClick,
}) => {
  return (
    <div
      className="grid grid-cols-[1fr_30px_1fr] justify-evenly px-4 py-5 first:border-t border-b border-slate-300"
      onClick={onClick}
    >
      <TransactionQtyAndCurrency isSend qty={sendQty} currency={sendCurrency} />
      {isSent ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-green-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 5l7 7-7 7M5 5l7 7-7 7"
          />
        </svg>
      )}
      <TransactionQtyAndCurrency
        side="receive"
        qty={receiveQty}
        currency={receiveCurrency}
      />
    </div>
  );
};

export default TransactionListItem;
