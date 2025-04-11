import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <nav className="flex justify-between items-center p-6 ">
        <NavLink to="/">
          <h1 className={`px-4 py-2 bg-blue-400 rounded-lg `}>MovieFlix</h1>
        </NavLink>
        <ul className="flex gap-6 mr-10">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about"> About</NavLink>
          </li>
          <li>
            <NavLink to="/movie"> Movies</NavLink>
          </li>
          <li>
            <NavLink to="/contact"> Contact</NavLink>
          </li>
        </ul>
        <div>
          <label htmlFor="">Search</label>
          <input
            type="text"
            name="Search"
            id="search"
            placeholder="Search here"
            className="border-1 border-green-400 placeholder:font-bold placeholder:p-5 ml-1 rounded-md"
          />
        </div>
      </nav>
      <div className="bg-gray-400 h-[1px] mb-[5px] w-screen"></div>
    </>
  );
};
