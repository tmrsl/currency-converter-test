const AppButton = (props) => {
  return (
    <button className="px-4 py-3 text-slate-100 bg-slate-700 ring-0 ring-slate-400 rounded-sm hover:bg-slate-600 focus:ring-2 disabled:opacity-75 disabled:cursor-not-allowed outline-none">
      {props.children}
    </button>
  );
};

export default AppButton;
