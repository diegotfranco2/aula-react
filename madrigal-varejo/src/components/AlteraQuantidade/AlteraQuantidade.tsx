import { Dispatch, SetStateAction } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

type AlteraQuantidadeProps = {
  quantidade: number;
  setQuantidade: Dispatch<SetStateAction<number>>
}

const AlteraQuantidade = ({ quantidade, setQuantidade }: AlteraQuantidadeProps) => {
  
  const diminuiQtd = () => {
    if (quantidade > 0 )
      setQuantidade((anterior) => anterior - 1)
  }

  const aumentaQtd = () => {
    setQuantidade((prev) => prev + 1)
  }

  return (
    <div className="flex gap-4 border border-silver rounded px-1 py-0.5 items-center">
      <button
        className="text-orange-500 p-1 rounded hover:bg-neutral-200 outline-0 focus:ring-1"
        onClick={diminuiQtd}
      >
        <FaMinus className="text-xs" />
      </button>
      <span className="text-xs font-medium" >{quantidade}</span>
      <button
        className="text-orange-500 p-1 rounded hover:bg-neutral-200 outline-0 focus:ring-1"
        onClick={aumentaQtd}
      >
        <FaPlus className="text-xs" />
      </button>
    </div>
  );
}

export default AlteraQuantidade;