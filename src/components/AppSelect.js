const AppSelect = (props) => {
  const selectChangeHandler = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <select
      className="p-4 text-slate-900 text-2xl rounded-l-none rounded-r-sm border border-t-slate-300 border-l-0 outline-none"
      value={props.value}
      onChange={selectChangeHandler}
    >
      {props.items.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default AppSelect;
