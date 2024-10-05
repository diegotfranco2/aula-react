import { useState } from "react";

const QtdPreco = () => {
  const [quantidade, setQuantidade] = useState<string>("");
  const preco = 3.5;
  
  return ( 
    <div className="flex flex-col gap-1 bg-snow rounded px-6 py-2 border border-silver text-neutral-800">
      <div className="flex justify-between">
        <label htmlFor="qtd" className="text-sm">Quantidade:</label>
        <input
          id="qtd"
          className="text-sm outline-0 ps-2 pe-0.5 py-1 rounded border border-silver shadow hover:border-blue-400 focus:border-blue-400 focus:ring-1"
          type="number"
          value={quantidade}
          onChange={(evt) => setQuantidade(evt.target.value)}
        />
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