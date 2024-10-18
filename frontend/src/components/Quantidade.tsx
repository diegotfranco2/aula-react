import { Dispatch, SetStateAction } from "react";

type QuantidadeProps = {
  quantidade: number;
  setQuantidade: Dispatch<SetStateAction<number>>
}


const Quantidade = ({quantidade, setQuantidade}: QuantidadeProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="" className="font-semibold text-xs">Quantidade</label>
      <input
        type="number"
        value={quantidade}
        onChange={(e) => setQuantidade(Number(e.target.value))}
        className="border border-slate-300 rounded outline-0 ps-2 py-0.5 text-sm"
      />
    </div>
  );
}

export default Quantidade;