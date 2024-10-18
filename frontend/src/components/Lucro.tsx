const Lucro = ({ valor }: {valor: number}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="" className="font-semibold text-xs">% Lucro</label>
      <input
        type="text"
        value={valor.toLocaleString("pt-br", { maximumFractionDigits: 2 })}
        className="border border-slate-300 bg-stone-200 rounded outline-0 ps-2 py-0.5 text-sm"
        disabled
      />
    </div>
  );
}

export default Lucro;