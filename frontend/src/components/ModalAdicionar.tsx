import { Dispatch, SetStateAction, useState } from "react";
import { ProdutoTipo } from "../db/db";
import CodProduto from "./CodProduto";
import Descricao from "./Descricao";
import Quantidade from "./Quantidade";
import Custo from "./Custo";
import Preco from "./Preco";
import Lucro from "./Lucro";

type ModalAdicionarProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setDados: Dispatch<SetStateAction<ProdutoTipo[]>>;
}

const ModalAdicionar = ({ isOpen, setIsOpen, setDados }: ModalAdicionarProps) => {
  const [codigo, setCodigo] = useState<number>(0);
  const [descricao, setDescricao] = useState<string>("");
  const [quantidade, setQuantidade] = useState<number>(0);
  const [custo, setCusto] = useState<number>(0);
  const [preco, setPreco] = useState<number>(0);
  const lucro = (preco / custo - 1)*100;

  const onAddProduto = () => {
    const novoProduto = {
      id: codigo,
      nome: descricao,
      quantidade,
      custo,
      preco,
      lucro
    }
    
    setDados((prev) => {
      console.log([...prev, novoProduto]);
      return [...prev, novoProduto]
    });
    setIsOpen(false);
  }

  return (
    isOpen && (
      <div id="modal-bg" className="fixed top-0 left-0 w-full h-full bg-[#00000045] flex justify-center items-center">
        <div id="modal" className="flex flex-col bg-gray-50 p-4 gap-2 rounded-md">
          <div id="area-conteudo" className="flex flex-col grow gap-4">
            <p className="text-xs " >Entre com as informações do produto</p>
            <div className="flex gap-2">
              <CodProduto codigo={codigo} setCodigo={setCodigo}/>
              <Descricao descricao={descricao} setDescricao={setDescricao}/>
            </div>
            <div className="flex gap-2">
              <Quantidade quantidade={quantidade} setQuantidade={setQuantidade}/>
              <Custo custo={custo} setCusto={setCusto}/>
              <Preco preco={preco} setPreco={setPreco}/>
              <Lucro valor={lucro}/>
            </div>
          </div>
          <div id="area-botoes" className="flex justify-end gap-2 mt-4">
            <button
              className="border border-red-600 text-red-600 bg-gray-50 rounded px-2 py-1 text-sm"
              onClick={() => setIsOpen(false)}>
              Cancelar
            </button>
            <button
              className="border text-gray-50 bg-blue-700 rounded px-2 py-1 text-sm"
              onClick={onAddProduto}>
              Confirmar
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default ModalAdicionar;