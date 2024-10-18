import { useState } from "react";
import Buscar from "../components/Buscar.tsx";
import Tabela from "../components/Tabela";
import { produtos, ProdutoTipo } from "../db/db.ts";
import { MdAdd } from "react-icons/md";
import ModalAdicionar from "../components/ModalAdicionar.tsx";
import ModalEditar from "../components/ModalEditar.tsx";

const Estoque = () => {
  const [isOpenAdicionar, setIsOpenAdicionar] = useState(false);
  const [isOpenEditar, setIsOpenEditar] = useState(false);
  const [dados, setDados] = useState(produtos);
  const [produto, setProduto] = useState({
    id: 0,
    nome: "",
    quantidade: 0,
    custo: 0,
    preco: 0,
    lucro: 0
  });

  return (
    <>
      <h1>Estoque</h1>
      <div className="border-b border-b-gray-300 flex justify-between px-6 pt-6 pb-3">
        <Buscar />
        <button className="flex justify-center items-center h-7 bg-blue-600 border-none text-gray-50 cursor-pointer px-1 rounded">
          <MdAdd onClick={() => setIsOpenAdicionar(true)} />
        </button>
      </div>
      <Tabela
        headers={["#", "Nome", "Quantidade", "Preço", "Custo", "% Lucro", "Ações"]}
        dados={dados}
        setDados={setDados}
        setProduto={setProduto}
        setIsOpenEditar={setIsOpenEditar}
      />
      <ModalAdicionar isOpen={isOpenAdicionar} setIsOpen={setIsOpenAdicionar} setDados={setDados} />
      <ModalEditar isOpenEditar={isOpenEditar} setIsOpenEditar={setIsOpenEditar} produto={produto} setDados={setDados} />
    </>
  );
}

export default Estoque;