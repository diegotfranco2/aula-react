import { MdEdit, MdDelete } from "react-icons/md";
import { ProdutoTipo } from "../db/db";
import { useState } from "react";


type TabelaProps = {
  headers: string[];
  data: ProdutoTipo[];
}

const Tabela = ({ headers, data }: TabelaProps) => {
  const [dados, setDados] = useState(data);


  const onRemove = (id: number) => {
    setDados((dados) => dados.filter((item) => item.id != id));
  }

  return (
    <div className="my-4 mx-8 back">
      <table className="w-full border border-collapse border-purple-400 bg-gray-50">
        <thead>
          <tr>
            {headers.map((header, pos) => <th key={pos} className="border border-purple-400 py-1 px-2">{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {dados.map((produto: ProdutoTipo, pos) => {
            return (
              <tr key={produto.id} className="hover:bg-purple-300">
                <td className="border border-purple-400 py-1 px-2 text-center">{pos+1}</td>
                <td className="border border-purple-400 py-1 px-2">{produto.nome}</td>
                <td className="border border-purple-400 py-1 px-2 text-center">{produto.quantidade}</td>
                <td className="border border-purple-400 py-1 px-2 text-center">{produto.preco.toLocaleString("pt-br", { style: "currency", currency: 'BRL' })}</td>
                <td className="border border-purple-400 py-1 px-2 text-center">{produto.custo.toLocaleString("pt-br", { style: "currency", currency: 'BRL' })}</td>
                <td className="border border-purple-400 py-1 px-2 text-center">{`${produto.lucro} %`}</td>
                <td className="border border-purple-400 py-1 px-2 text-center">
                  <div className="flex justify-center items-center gap-3">
                    <MdEdit
                      className="cursor-pointer hover: text-amber-500"

                    />
                    <MdDelete
                      className="cursor-pointer hover: text-red-600"
                      onClick={() => onRemove(produto.id)}
                    />
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>

  );
}

export default Tabela;