import AlteraQuantidade from "../AlteraQuantidade/AlteraQuantidade";
import CalculaPreco from "../CalculaPreco/CalculaPreco";

type QtdPrecoProps = {
	nome: string;
	descricao: string;
	preco: number;
};

const QtdPreco = ({ nome, descricao, preco }: QtdPrecoProps) => {
	return (
		<div className="flex bg-snow rounded px-6 py-2 border border-silver text-neutral-800">
			<div className="flex flex-col grow">
				<span className="text-sm">{nome}</span>
				<p className="text-xs font-light">{descricao}</p>
			</div>
			<div className="flex flex-col gap-1 py-1">
				<AlteraQuantidade />
				<CalculaPreco preco={preco} />
			</div>
		</div>
	);
};

export default QtdPreco;
