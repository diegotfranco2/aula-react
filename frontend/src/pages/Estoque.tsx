import Tabela from "../components/Tabela";
import { produtos } from "../db/db.ts";

const Estoque = () => {
  return (
    <>
      <h1>Estoque</h1>
      <Tabela headers={["#", "Nome", "Quantidade", "Preço", "Custo", "% Lucro", "Ações"]} data={produtos} />
    </>
  );
}

export default Estoque;