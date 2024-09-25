import { useEffect, useState } from "react";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa6";
import { RiCloseLargeLine } from "react-icons/ri";

function NavBar({ children }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowHumburgerMenu = () => {
    setShowMenu((show) => !show);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && showMenu) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("overflow-hidden");
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showMenu]);

  return (
    <nav className="bg-violet-700 rounded-2xl">
      <div className="flex justify-between items-center py-4 px-4 md:px-20 md:py-4 md:flex">
        <Logo />

        <div className="hidden items-center gap-x-3 md:flex">{children}</div>

        <button
          className="text-white text-xl md:hidden"
          onClick={handleShowHumburgerMenu}
        >
          {!showMenu ? <FaBars /> : <RiCloseLargeLine />}
        </button>
      </div>

      <div
        className={`${
          showMenu ? "h-screen py-20" : "h-0"
        } transition-all duration-300 overflow-hidden flex flex-col gap-y-4 px-4 md:hidden`}
      >
        {children}
      </div>
    </nav>
  );
}

export default NavBar;
