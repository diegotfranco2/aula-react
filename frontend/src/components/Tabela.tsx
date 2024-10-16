import { produtos } from "../db/db.js";
import { MdEdit, MdDelete } from "react-icons/md";

type ProdutoTipo = {
  id: number;
  nome: string;
  quantidade: number;
  preco: number;
  custo: number;
  lucro: number;
}

type TabelaProps = {
  headers: string[];
}

const Tabela = ({ headers }: TabelaProps) => {

  return (
    <div className="my-4 mx-8 rounded">
      <table className="w-full border border-collapse bg-gray-50">
        <thead>
          <tr>
            {headers.map(header => <th className="border border-purple-400 py-1 px-2">{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto: ProdutoTipo) => {
            return (
              <tr className="hover:bg-purple-300">
                <td className="border border-purple-400 py-1 px-2 text-center">{produto.id}</td>
                <td className="border border-purple-400 py-1 px-2">{produto.nome}</td>
                <td className="border border-purple-400 py-1 px-2 text-center">{produto.quantidade}</td>
                <td className="border border-purple-400 py-1 px-2 text-center">{produto.preco.toLocaleString("pt-br", { style: "currency", currency: 'BRL' })}</td>
                <td className="border border-purple-400 py-1 px-2 text-center">{produto.custo.toLocaleString("pt-br", { style: "currency", currency: 'BRL' })}</td>
                <td className="border border-purple-400 py-1 px-2 text-center">{`${produto.lucro} %`}</td>
                <td className="border border-purple-400 py-1 px-2 text-center">
                  <div className="flex justify-center items-center gap-3">
                    <MdEdit className="cursor-pointer hover: text-amber-500" />
                    <MdDelete className="cursor-pointer hover: text-red-600" />
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