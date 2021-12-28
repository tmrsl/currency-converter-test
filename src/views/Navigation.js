import { NavLink, useMatch } from "react-router-dom";

const Navigation = () => {
  const isDetailRoute = useMatch("transactions/:transactionId");

  return (
    <nav className="flex items-center justify-evenly flex-shrink-0 h-16 w-full bg-stone-50 border border-t-slate-200">
      {!isDetailRoute ? (
        <>
          <NavLink
            to="/"
            className={({ isActive }) =>
              [isActive ? "text-blue-500" : undefined, "inline-flex"]
                .filter((i) => Boolean)
                .join(" ")
            }
          >
            <span className="inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
              Converter
            </span>
          </NavLink>

          <NavLink
            to="transactions"
            className={({ isActive }) =>
              [isActive ? "text-blue-500" : undefined, "inline-flex"]
                .filter((i) => Boolean)
                .join(" ")
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            Transactions
          </NavLink>
        </>
      ) : (
        <NavLink to="transactions" className="inline-flex">
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
