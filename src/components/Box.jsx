import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <div className="flex justify-end">
        <button
          className="text-white p-2 bg-violet-700 rounded-full mb-3 hover:bg-violet-500"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
      <div
        className={`${
          isOpen ? "bg-slate-600 rounded-lg p-2 md:min-h-full" : "hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default Box;
