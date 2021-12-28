import TransactionListItem from "../components/transactions/TransactionListItem";

const Transactions = (props) => {
  const clickHandler = (id) => {
    console.log("here", id);
  };

  return (
    <div className="w-full h-full overflow-y-auto">
      {props.items.length ? (
        props.items.map((t) => (
          <TransactionListItem
            sendQty={t.sendQty}
            sendCurrency={t.sendCurrency}
            receiveQty={t.receiveQty}
            receiveCurrency={t.receiveCurrency}
            key={t.id}
            onClick={() => clickHandler(t.id)}
          />
        ))
      ) : (
        <div className="h-full w-full flex items-center justify-center">
          No transactions added yet
        </div>
      )}
    </div>
  );
};

export default Transactions;
