import { useState } from "react";
import Buscar from "../components/Buscar.tsx";
import Modal from "../components/Modal.tsx";
import Tabela from "../components/Tabela";
import { produtos, ProdutoTipo } from "../db/db.ts";
import { MdAdd } from "react-icons/md";

export type ModalOpen = {
  open: boolean;
  editMode: boolean;
}

const Estoque = () => {
  const [isOpen, setIsOpen] = useState<ModalOpen>({open:false, editMode:false});
  const [dados, setDados] = useState<ProdutoTipo[]>(() => produtos);
  const [produto, setProduto] = useState<ProdutoTipo>({
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
          <MdAdd onClick={() => setIsOpen({open: true, editMode: false})} />
        </button>
      </div>
      <Tabela headers={["#", "Nome", "Quantidade", "Preço", "Custo", "% Lucro", "Ações"]} dados={dados} setDados={setDados} setProduto={setProduto} setIsOpen={setIsOpen}/>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} setDados={setDados} produto={produto} setProduto={setProduto}/>
    </>
  );
}

export default Estoque;