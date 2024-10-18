import { Dispatch, SetStateAction } from "react";

type DescricaoProps = {
  descricao: string;
  setDescricao: Dispatch<SetStateAction<string>>
}

const Descricao = ({ descricao, setDescricao }: DescricaoProps) => {
  return (
    <div className="flex flex-col grow gap-1">
      <label htmlFor="" className="font-semibold text-xs">Descrição</label>
      <input
        type="text"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        className="border border-slate-300 rounded outline-0 ps-2 py-0.5 text-sm"
      />
    </div>
  );
}

export default Descricao;