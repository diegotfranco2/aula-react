import QtdPreco from "./components/QtdPreco/QtdPreco";

const App = () => {
	return (
		<div className="border border-black p-8">
			<QtdPreco nome={"Mussarela"} descricao={"Fatia de mussarela piracanjuba  (10g)"} preco={4.9} />
		</div>
	);
};

export default App;
