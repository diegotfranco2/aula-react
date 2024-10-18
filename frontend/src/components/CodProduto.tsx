import { Dispatch, SetStateAction } from "react";

type CodProdutoProps = {
  codigo: number;
  setCodigo: Dispatch<SetStateAction<number>>
}


const CodProduto = ({codigo, setCodigo}: CodProdutoProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="" className="font-semibold text-xs">Cód. Produto</label>
      <input
        type="number"
        value={codigo}
        onChange={(e) => setCodigo(Number(e.target.value))}
        className="border border-slate-300 rounded outline-0 ps-2 py-0.5 text-sm"
      />
    </div>
  );
}

export default CodProduto;