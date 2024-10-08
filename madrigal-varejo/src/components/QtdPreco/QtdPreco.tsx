import AlteraQuantidade from "../AlteraQuantidade/AlteraQuantidade";
import CalculaPreco from "../CalculaPreco/CalculaPreco";

const QtdPreco = () => {
  return (
    <div className="flex flex-col gap-1 bg-snow rounded px-6 py-2 border border-silver text-neutral-800">
      <div className="flex justify-between">
        <label htmlFor="qtd" className="text-sm">Quantidade:</label>
        <AlteraQuantidade />
      </div>
      <div className="flex justify-between">
        <label htmlFor="preco" className="text-sm">Preço:</label>
        <CalculaPreco preco={3.5} quantidade={1} />
      </div>
    </div>
  );
}

export default QtdPreco;