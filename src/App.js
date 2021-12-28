import { useState } from "react";
import { http } from "./utils";
import AppButton from "./components/AppButton";
import AppInput from "./components/AppInput";
import AppSelect from "./components/AppSelect";

function App() {
  const BASE_URL = "https://freecurrencyapi.net/api/v2/latest?";
  const API_KEY = "a19652b0-63e5-11ec-84e4-c18806f5efbf";

  console.log("here");
  http(BASE_URL, { apikey: API_KEY });

  const testHandler = (e) => {
    console.log(e);
  };

  // const [transactions, setTransaction] = useState([]);

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex items-center flex-grow px-4">
        {/* Converter */}
        {/* <div className="w-full">
          <div className="flex w-full">
            <input
              className="flex-shrink min-w-1 p-4 text-2xl text-slate-900 placeholder:text-slate-300 rounded-r-none rounded-l-sm border border-t-slate-300 outline-none"
              type="number"
              placeholder="Enter amount"
            />
            <select className="p-4 text-slate-900 text-2xl rounded-l-none rounded-r-sm border border-t-slate-300 border-l-0 outline-none">
              <option value="USD">USD</option>
            </select>
          </div>
        </div> */}
        <div className="w-full">
          <div className="flex w-full">
            <AppInput
              placeholder="Enter amount"
              value={4}
              onChange={testHandler}
            />
            <AppSelect value={4} items={[1, 2, 3]} onChange={testHandler} />
          </div>
        </div>
      </div>

      <div>
        <AppButton>Create transaction</AppButton>
      </div>

      <nav className="flex items-center justify-evenly h-20 w-full bg-stone-50 border border-t-slate-200">
        <button className="text-blue-500">Converter</button>
        <button className="text-slate-900">Transactions</button>
      </nav>
    </div>
  );
}

export default App;
