import { Dispatch, SetStateAction } from "react";

type CustoProps = {
  custo: number;
  setCusto: Dispatch<SetStateAction<number>>
}

const Custo = ({ custo, setCusto }: CustoProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="" className="font-semibold text-xs">Custo</label>
      <input
        type="number"
        value={custo}
        onChange={(e) => setCusto(Number(e.target.value))}
        className="border border-slate-300 rounded outline-0 ps-2 py-0.5 text-sm"
      />
    </div>
  );
}

export default Custo;