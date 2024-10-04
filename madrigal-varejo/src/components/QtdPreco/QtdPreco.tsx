import { useState } from "react";
import "./QtdPreco.css";

const QtdPreco = () => {
  const [quantidade, setQuantidade] = useState<string>("");
  const [preco, setPreco] = useState<number>(3.5);
  
  return ( 
    <div id="container">
      <div className="trem">
        <label htmlFor="qtd">Quantidade:</label>
        <input id="qtd" type="number" value={quantidade} onChange={(evt) => setQuantidade(evt.target.value)}/>
      </div>
      <div className="trem">
        <label htmlFor="preco">Preço:</label>
        <span id="preco" >
          R$ {(preco*Number(quantidade)).toLocaleString('pt-br', { minimumFractionDigits: 2 })}
        </span>
      </div>
    </div>
  );
}

export default QtdPreco;