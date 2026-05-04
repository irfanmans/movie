import { useState } from "react";
import type BoxProps from "../interface/Box";

export default function Box({ children }: BoxProps) {
  const [isOpen1, setIsOpen1] = useState<boolean>(true);

  return (
    <>
      <div className="box">
        <button
          className="btn-toggle"
          onClick={() => setIsOpen1((open) => !open)}
        >
          {isOpen1 ? "-" : "+"}
        </button>

        {isOpen1 && children}
      </div>
    </>
  );
}
