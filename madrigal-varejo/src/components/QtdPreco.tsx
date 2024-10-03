// type QtdPrecoProps = {
//   quantidade: number;
//   preco: number;
// }

import { useState } from "react";

// interface QtdPrecoProps {
//   quantidade: number;
//   preco: number;
// }

const QtdPreco = () => {
  const [quantidade, setQuantidade] = useState<number>(0);
  const [preco, setPreco] = useState<number>(3.5);
  
  return ( 
    <div>
      <div>
        <label htmlFor="qtd">Quantidade</label>
        <input id="qtd" type="number" value={quantidade} onChange={(evt) => setQuantidade(Number(evt.target.value))}/>
      </div>
      <div>
        <label htmlFor="preco">Preço</label>
        <span id="preco" >{preco}</span>
      </div>
    </div>
  );
}

export default QtdPreco;