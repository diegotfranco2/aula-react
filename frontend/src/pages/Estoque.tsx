import Tabela from "../components/Tabela";

const Estoque = () => {
  return (
    <>
      <h1>Estoque</h1>
      <Tabela headers={["#", "Nome", "Quantidade", "Preço", "Custo", "% Lucro", "Ações"]} />
    </>
  );
}

export default Estoque;