import { MdOutlineSearch } from "react-icons/md";

const Buscar = () => {
  return (
    <div className="border border-gray-300 flex items-center rounded px-2 bg-gray-50">
      <input
        type="text"
        className="h-8 border-none outline-0 rounded bg-inherit"
        placeholder="Buscar..."
      />
      <button className="flex justify-center items-center h-4 bg-inherit border-none text-gray-500 cursor-pointer">
        <MdOutlineSearch />
      </button>
    </div>);
}

export default Buscar;