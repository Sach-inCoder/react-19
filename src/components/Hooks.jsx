import { Link, NavLink, Outlet } from "react-router-dom";
const Hooks = () => {
  return (
    <>
      <div className="container py-5">
        <h2>Hooks in React Js</h2>

        <p>
          React Hooks are special functions introduced in React 16.8 that allow
          you to use state, lifecycle methods, and other core React features
          inside functional components. Before Hooks, these features required
          writing class components.
        </p>
        <NavLink
          className={({ isActive }) =>
            isActive ? "btn btn-warning mx-1" : "btn btn-success mx-1"
          }
          to="useState"
        >
          useState
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "btn btn-warning mx-1" : "btn btn-success mx-1"
          }
          to="useEffect"
        >
          useEffect
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "btn btn-warning mx-1" : "btn btn-success mx-1"
          }
          to="useTransition"
        >
          useTransition
        </NavLink>
        <Outlet />
      </div>
    </>
  );
};
export default Hooks;
