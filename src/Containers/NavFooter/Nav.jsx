import {
  Outlet,
  NavLink,
  useLoaderData,
  Form,
  redirect,	
} from "react-router-dom";
function Nav() {
  return (
    <div className="my-3">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
            </ul>
          </div>
          <a className="font-bold  text-3xl uppercase">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal font-semibold items-center gap-x-10 text-xl px-1">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-2  px-3 py-1 border-2 duration-300 hover:bg-[#23BE0A] hover:text-white border-[#23BE0A] rounded-lg" : ""
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-2  px-3 py-1 border-2 duration-300 hover:bg-[#23BE0A] hover:text-white border-[#23BE0A] rounded-lg" : ""
                }
                to="/listedbook"
              >
                Listed Books
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-2  px-3 py-1 border-2 duration-300 hover:bg-[#23BE0A] hover:text-white border-[#23BE0A] rounded-lg" : ""
                }
				to="/pageread"
              >
                Pages to Read
              </NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-x-4">
          <NavLink to="/"   className={({ isActive }) =>
                  isActive ? "border-2 px-3 py-1 duration-300 hover:bg-[#23BE0A] bg-[#23BE0A] text-white border-[#23BE0A] rounded-lg btn" : "btn"
                }>Sign in
				
		</NavLink>
          <NavLink to="/signup"      className={({ isActive }) =>
                 isActive ? "border-2 px-3 py-1 duration-300 hover:bg-[#23BE0A] bg-[#23BE0A] text-white border-[#23BE0A] rounded-lg btn" : "btn"
                }>Sign Up
				
		</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Nav;
