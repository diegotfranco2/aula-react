import { useQuantidadePreco } from "../../hooks/useQuantidadePreco";

const CalculaPreco = () => {
	const { quantidade, preco } = useQuantidadePreco();
	return (
		<span id="preco" className="text-xs text-right">
			R${" "}
			{(preco * quantidade).toLocaleString("pt-br", {
				minimumFractionDigits: 2,
			})}
		</span>
	);
};

export default CalculaPreco;
