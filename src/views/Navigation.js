import { NavLink, useMatch } from "react-router-dom";

const Navigation = () => {
  const isDetailRoute = useMatch("transactions/:transactionId");

  return (
    <nav className="flex items-center justify-evenly h-20 w-full bg-stone-50 border border-t-slate-200">
      {!isDetailRoute ? (
        <>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : undefined
            }
          >
            Converter
          </NavLink>

          <NavLink
            to="transactions"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : undefined
            }
          >
            Transactions
          </NavLink>
        </>
      ) : (
        <NavLink to="transactions">Back</NavLink>
      )}
    </nav>
  );
};

export default Navigation;
