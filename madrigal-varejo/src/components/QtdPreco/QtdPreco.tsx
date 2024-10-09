import { useState } from "react";
import AlteraQuantidade from "../AlteraQuantidade/AlteraQuantidade";
import CalculaPreco from "../CalculaPreco/CalculaPreco";

type QtdPrecoProps = {
  nome: string;
  descricao: string;
  preco: number;
}

const QtdPreco = ({ nome, descricao, preco }: QtdPrecoProps) => {
  const [quantidade, setQuantidade] = useState<number>(1);
  preco = preco*quantidade;

  return (
    <div className="flex gap-1 bg-snow rounded px-6 py-2 border border-silver text-neutral-800">
      <div className="flex flex-col grow gap-0.5">
        <span className="text-sm">{nome}</span>
        <p className="text-xxs font-noto font-light">{descricao}</p>
      </div>
      <div className="flex flex-col gap-2 py-2">
        <AlteraQuantidade quantidade={quantidade} setQuantidade={setQuantidade}/>
        <CalculaPreco preco={preco} />
      </div>
    </div>
  );
}

export default QtdPreco;