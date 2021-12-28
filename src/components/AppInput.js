const AppInput = (props) => {
  return (
    <input
      className="flex-shrink min-w-1 p-4 text-2xl text-slate-900 placeholder:text-slate-300 rounded-r-none rounded-l-sm border border-t-slate-300 outline-none"
      type="number"
      value={props.value}
      placeholder={props.placeholder}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
};

export default AppInput;
