type CalculaPrecoProps = {
  preco: number;
}

const CalculaPreco = ({ preco }: CalculaPrecoProps) => {
  return (
    <span id="preco" className="text-xs text-right" >
      R$ {(preco).toLocaleString('pt-br', { minimumFractionDigits: 2 })}
    </span>
  );
}

export default CalculaPreco;