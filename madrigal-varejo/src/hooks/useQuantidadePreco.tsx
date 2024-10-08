import {
	Dispatch,
	SetStateAction,
	createContext,
	useContext,
	PropsWithChildren,
	useState,
} from "react";

type ContextType = {
	preco: number;
	quantidade: number;
	setQuantidade: Dispatch<SetStateAction<number>>;
};

const QuantidadePrecoContext = createContext<ContextType | undefined>(
	undefined
);

export const QuantidadePrecoProvider = ({
	preco,
	children,
}: {
	preco: number;
} & PropsWithChildren) => {
	const [quantidade, setQuantidade] = useState<number>(1);
	preco = preco * quantidade;

	return (
		<QuantidadePrecoContext.Provider
			value={{ preco, quantidade, setQuantidade }}
		>
			{children}
		</QuantidadePrecoContext.Provider>
	);
};

export const useQuantidadePreco = () => {
	const context = useContext(QuantidadePrecoContext);
	if (context === undefined)
		throw new Error(
			"useQuantidadePreco deve ser utilizado somente com QuantidadePrecoProvider"
		);

	return context;
};
