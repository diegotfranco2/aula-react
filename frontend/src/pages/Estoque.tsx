import { useState } from "react";
import Buscar from "../components/Buscar.tsx";
import Modal from "../components/Modal.tsx";
import Tabela from "../components/Tabela";
import { produtos } from "../db/db.ts";
import { MdAdd } from "react-icons/md";

const Estoque = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <h1>Estoque</h1>
      <div className="border-b border-b-gray-300 flex justify-between px-6 pt-6 pb-3">
        <Buscar />
        <button className="flex justify-center items-center h-7 bg-blue-600 border-none text-gray-50 cursor-pointer px-1 rounded">
          <MdAdd onClick={() => setIsOpen(true)} />
        </button>
      </div>
      <Tabela headers={["#", "Nome", "Quantidade", "Preço", "Custo", "% Lucro", "Ações"]} data={produtos} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Estoque;