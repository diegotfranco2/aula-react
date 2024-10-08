import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const QtdPreco = () => {
  const [quantidade, setQuantidade] = useState<number>(3);
  const preco = 3.5;

  const diminuiQtd = () => {
    setQuantidade((prev) => prev - 1)
  }
  const aumentaQtd = () => {
    setQuantidade((prev) => prev + 1)
  }
  
  return ( 
    <div className="flex flex-col gap-1 bg-snow rounded px-6 py-2 border border-silver text-neutral-800">
      <div className="flex justify-between">
        <label htmlFor="qtd" className="text-sm">Quantidade:</label>
        <div className="flex gap-4 border border-silver rounded px-2 items-center">
          <button
            className="text-orange-500 p-1 rounded hover:bg-neutral-200 outline-0 focus:ring-1"
            onClick={diminuiQtd}
            >
            <FaMinus className="text-xs" />
          </button>
          <span>{quantidade}</span> {/* aqui era o input */}
          <button
            className="text-orange-500 p-1 rounded hover:bg-neutral-200 outline-0 focus:ring-1"
            onClick={aumentaQtd}
          >
            <FaPlus className="text-xs" />
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <label htmlFor="preco" className="text-sm">Preço:</label>
        <span id="preco" className="text-xs" >
          R$ {(preco*Number(quantidade)).toLocaleString('pt-br', { minimumFractionDigits: 2 })}
        </span>
      </div>
    </div>
  );
}

export default QtdPreco;