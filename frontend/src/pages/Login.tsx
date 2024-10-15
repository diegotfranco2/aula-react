import { Link } from "react-router-dom";
import Email from "../components/Email";
import Senha from "../components/Senha";

const Login = () => {
  return (
    <main className="bg-gray-50 border border-gray-200 flex flex-col mx-12 mt-6 p-8 gap-2">
      <h1>Entrar</h1>
      <p>Por favor faça seu login</p>
      <Email />
      <Senha />
      <button className="bg-blue-600 rounded text-gray-50 outline-0 focus:ring-2 ">confirmar</button>
      <Link
        className="outline-0 hover:underline"
        to="/inscrever"
      >
        ainda não tem cadastro?
      </Link>
    </main>
  );
}

export default Login;