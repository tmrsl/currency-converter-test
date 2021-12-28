const AppButton = (props) => {
  return (
    <button
      type={props.type}
      className="px-5 py-4 text-lg text-slate-100 bg-slate-700 ring-0 ring-slate-400 rounded-sm hover:bg-slate-600 focus:ring-2 disabled:opacity-75 disabled:cursor-not-allowed outline-none"
    >
      {props.children}
    </button>
  );
};

export default AppButton;
