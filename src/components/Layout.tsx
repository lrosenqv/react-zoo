import { Link, Outlet } from "react-router-dom";
import './Layout.css'

export const Layout = () => {
  return(
  <>
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/animals">Animals</Link>
      </nav>
    </header>

      <main>
        <Outlet></Outlet>
      </main>

    <footer>Footer</footer>
  </>
  )
}