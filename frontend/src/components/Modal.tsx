import { Dispatch, SetStateAction, useState } from "react";
import CodProduto from "./CodProduto";
import Custo from "./Custo";
import Descricao from "./Descricao";
import Lucro from "./Lucro";
import Preco from "./Preco";
import Quantidade from "./Quantidade";
import { ProdutoTipo } from "../db/db";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setDados: Dispatch<SetStateAction<ProdutoTipo[]>>;
}

const Modal = ({ isOpen, setIsOpen, setDados }: ModalProps) => {

  const [produto, setProduto] = useState<ProdutoTipo>({
    id: 0,
    nome: "",
    quantidade: 0,
    custo: 0,
    preco: 0,
    lucro: 0
  });

  const setCodigo = (id: number) => {
    setProduto((prev) => ({ ...prev, id }))
  }
  const setDescricao = (nome: string) => {
    setProduto((prev) => ({ ...prev, nome }))
  }
  const setQuantidade = (quantidade: number) => {
    setProduto((prev) => ({ ...prev, quantidade }))
  }
  const setCusto = (custo: number) => {
    setProduto((prev) => ({ ...prev, custo, lucro: (prev.preco / custo - 1) * 100 }))
  }
  const setPreco = (preco: number) => {
    setProduto((prev) => ({ ...prev, preco, lucro: (preco / prev.custo - 1) * 100 }))
  }

  const funcaoQueAdiciona = () => {
    setDados((prev) => [...prev, produto]);
    setIsOpen(false);
  }

  return (
    isOpen && (
      <div id="modal-bg" className="fixed top-0 left-0 w-full h-full bg-[#00000045] flex justify-center items-center">
        <div id="modal" className="flex flex-col bg-gray-50 p-4 gap-2 rounded-md">
          <div id="area-conteudo" className="flex flex-col grow gap-4">
            <p className="text-xs " >Entre com as informações do produto</p>
            <div className="flex gap-2">
              <CodProduto codigo={produto.id} setCodigo={setCodigo} />
              <Descricao descricao={produto.nome} setDescricao={setDescricao} />
            </div>
            <div className="flex gap-2">
              <Quantidade quantidade={produto.quantidade} setQuantidade={setQuantidade} />
              <Custo custo={produto.custo} setCusto={setCusto} />
              <Preco preco={produto.preco} setPreco={setPreco} />
              <Lucro valor={produto.lucro} />
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
              onClick={funcaoQueAdiciona}>
              Confirmar
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default Modal;