const Email = () => {
  return (
    <>
      <label htmlFor="email">Email</label>
      <input
        className="bg-inherit border border-gray-900 rounded ps-2 outline-0"
        id="email"
        type="text"
        placeholder="email@teste.com"
      />
    </>
  );
}

export default Email;