import { Dispatch, SetStateAction } from "react";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ isOpen, setIsOpen }: ModalProps) => {
  return (
    isOpen && (
      <div id="modal-bg" className="fixed top-0 left-0 w-full h-full bg-[#00000045] flex justify-center items-center">
        <div id="modal" className="flex flex-col bg-gray-50 p-4 gap-2 rounded-md">
          <div id="area-conteudo" className="flex flex-col grow gap-4">
            <p className="text-xs " >Entre com as informações do produto</p>
            <div className="flex gap-2">
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="font-semibold text-xs">Cód. Produto</label>
                <input type="text" className="border border-slate-300 rounded outline-0 ps-2 py-0.5 text-sm" />
              </div>
              <div className="flex flex-col grow">
                <label htmlFor="" className="font-semibold text-xs">Descrição</label>
                <input type="text" className="border border-slate-300 rounded outline-0 ps-2 py-0.5 text-sm" />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="font-semibold text-xs">Quantidade</label>
                <input type="text" className="border border-slate-300 rounded outline-0 ps-2 py-0.5 text-sm" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="font-semibold text-xs">Custo</label>
                <input type="text" className="border border-slate-300 rounded outline-0 ps-2 py-0.5 text-sm" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="font-semibold text-xs">Preço</label>
                <input type="text" className="border border-slate-300 rounded outline-0 ps-2 py-0.5 text-sm" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="font-semibold text-xs">% Lucro</label>
                <input type="text" className="border border-slate-300 bg-stone-200 rounded outline-0 ps-2 py-0.5 text-sm" disabled/>
              </div>
            </div>
          </div>
          <div id="area-botoes" className="flex justify-end gap-2 mt-4">
            <button
              className="border border-red-600 text-red-600 bg-gray-50 rounded px-2 py-1 text-sm"
              onClick={() => setIsOpen(false)}>
              Cancelar
            </button>
            <button
              className="border text-gray-50 bg-blue-700 rounded px-2 py-1 text-sm"
              onClick={() => setIsOpen(false)}>
              Confirmar
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default Modal;