import { QuantidadePrecoProvider } from "../../hooks/useQuantidadePreco";
import AlteraQuantidade from "../AlteraQuantidade/AlteraQuantidade";
import CalculaPreco from "../CalculaPreco/CalculaPreco";

type QtdPrecoNomeProps = {
	nome: string;
  descricao: string;
	preco: number;
};

const QtdPrecoNome = ({ nome, descricao, preco }: QtdPrecoNomeProps) => {
	return (
		<div className="flex bg-snow rounded px-6 py-2 border border-silver text-neutral-800">
			<div className="flex flex-col gap-0.5 grow">
				<span className="text-sm">{nome}</span>
				<p className="text-xxs font-noto font-light">{descricao}</p>
			</div>
			<div className="flex flex-col gap-1 py-2 justify-center">
				<QuantidadePrecoProvider preco={preco}>
					<AlteraQuantidade />
					<CalculaPreco />
				</QuantidadePrecoProvider>
			</div>
		</div>
	);
};

export default QtdPrecoNome;
