import { Dispatch, SetStateAction } from "react";

type PrecoProps = {
  preco: number;
  setPreco: Dispatch<SetStateAction<number>>
}

const Preco = ({preco, setPreco}: PrecoProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="" className="font-semibold text-xs">Preço</label>
      <input
        type="number"
        value={preco}
        onChange={(e)=> setPreco(Number(e.target.value))}
        className="border border-slate-300 rounded outline-0 ps-2 py-0.5 text-sm" />
    </div>
  );
}

export default Preco;