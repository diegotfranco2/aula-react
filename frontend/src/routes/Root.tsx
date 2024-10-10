import { Link, Outlet } from "react-router-dom";

const Root = () => {
  
  return (
    <>
      <nav>
        <Link to="/">Pagina Principal</Link>
        <Link to="/paginaA">Pagina A</Link>
        <Link to="/paginaB">Pagina B</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Root;