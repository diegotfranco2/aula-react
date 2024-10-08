type CalculaPrecoProps = {
  preco: number;
  quantidade: number;
}

const CalculaPreco = ({ preco, quantidade }: CalculaPrecoProps) => {
  return (
    <span id="preco" className="text-xs" >
      R$ {(preco * Number(quantidade)).toLocaleString('pt-br', { minimumFractionDigits: 2 })}
    </span>
  );
}

export default CalculaPreco;