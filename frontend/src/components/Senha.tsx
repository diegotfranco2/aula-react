import { useState } from "react";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";

const Senha = () => {
  const [visibilidade, setVisibilidade] = useState(false);

  return (
    <>
      <label htmlFor="senha">Senha</label>
      <div className="border border-gray-900 flex rounded px-2">
        <input
          className="bg-inherit rounded outline-0 grow"
          id="senha"
          type={visibilidade ? "text" : "password"}
          placeholder="*********"
        />
        <button
          className="text-gray-600"
          onClick={() => setVisibilidade((prev) => !prev)}
        >
          {visibilidade ? <IoMdEyeOff /> : <IoMdEye />}
        </button>
      </div>
    </>
  );
}

export default Senha;