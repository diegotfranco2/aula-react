import { MdOutlineSearch } from "react-icons/md";

const Buscar = () => {
  return (
    <div className="border border-gray-300 flex items-center rounded px-2 py-0.5 bg-gray-50">
      <input
        type="text"
        className="border-none outline-0 rounded bg-inherit py-0.5"
        placeholder="Buscar..."
      />
      <button className="flex justify-center items-center p-1 text-gray-500 outline-0 rounded focus:ring-2">
        <MdOutlineSearch />
      </button>
    </div>);
}

export default Buscar;