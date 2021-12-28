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
      <span className="px-2">
        <span className="mr-2 font-semibold text-blue-400">{sendCurrency}</span>
        <span className="truncate font-light text-slate-800">{sendQty}</span>
      </span>
      <span> > </span>
      <span className="px-2 overflow-hidden">
        <span className="mr-2 font-semibold text-orange-400">
          {receiveCurrency}
        </span>
        <span className="truncate font-light text-slate-800">{receiveQty}</span>
      </span>
    </div>
  );
};

export default TransactionListItem;
