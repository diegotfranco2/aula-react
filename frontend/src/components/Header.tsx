import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-slate-800 text-gray-50 flex justify-around py-1">
      <Link to="/">Pagina Principal</Link>
      <Link to="/login">Login</Link>
      <Link to="/tabela">Tabela</Link>
    </nav>
  );
}

export default Header;