import { Link, Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <nav className="flexHorizontal">
        <Link to="/">Home</Link>
        <Link to="/useState">useState</Link>
        <Link to="/useReducer">useReducer</Link>
        <Link to="/Redux">Redux</Link>
      </nav>
      <div className="topMargin05">
        <Outlet />
      </div>
    </>
  )
}

export default Layout;