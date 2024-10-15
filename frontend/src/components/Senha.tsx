const Senha = () => {
  return (
    <>
      <label htmlFor="senha">Senha</label>
      <input
        className="bg-inherit border border-gray-900 rounded ps-2 outline-0"
        id="senha"
        type="password"
        placeholder="*********"
      />
    </>
  );
}

export default Senha;